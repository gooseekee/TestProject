/**
 * @license
 * This app exhibits yFiles for HTML functionalities.
 * Copyright (c) 2023 by yWorks GmbH, Vor dem Kreuzberg 28,
 * 72070 Tuebingen, Germany. All rights reserved.
 *
 * yFiles demo files exhibit yFiles for HTML functionalities.
 * Any redistribution of demo files in source code or binary form, with
 * or without modification, is not permitted.
 *
 * Owners of a valid software license for a yFiles for HTML
 * version are allowed to use the app source code as basis for their
 * own yFiles for HTML powered applications. Use of such programs is
 * governed by the rights and conditions as set out in the yFiles for HTML
 * license agreement. If in doubt, please mail to contact@yworks.com.
 *
 * THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN
 * NO EVENT SHALL yWorks BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import 'yfiles/yfiles.css'
import { useContext, useLayoutEffect, useRef } from 'react'
import {
  FoldingManager,
  GraphComponent,
  GraphEditorInputMode,
  GraphMLSupport,
  StorageLocation,
} from 'yfiles'
import '../lib/yFilesLicense'
import { GraphComponentContext } from '../lib/GraphComponentContext'
import { enableFolding } from '../lib/FoldingSupport'
import loadGraph from '../lib/loadGraph.ts'
import { useGraphSearch } from '../lib/use-graph-search'
import { ContextMenuComponent } from './ContextMenuComponent'
import { useTooltips } from '../lib/use-tooltips'

interface ReactGraphComponentProps {
  searchQuery: string
}

export default function ReactGraphComponent({
  searchQuery,
}: ReactGraphComponentProps) {
  // get hold of the GraphComponent
  const { graphComponent, graphComponentContainer } = useGraphComponent()

  // register tooltips on graph items
  useTooltips(graphComponent)

  // register search on graph items
  useGraphSearch(graphComponent, searchQuery)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        className="graph-component-container"
        style={{ width: '100%', height: '100%' }}
        ref={graphComponentContainer}
      />
      <ContextMenuComponent graphComponent={graphComponent.current} />
    </div>
  )
}

function useGraphComponent() {
  const graphComponentContainer = useRef<HTMLDivElement>(null)
  const graphComponent = useRef<GraphComponent>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setGraphComponent] = useContext(GraphComponentContext)

  useLayoutEffect(() => {
    const gcContainer = graphComponentContainer.current
    if (!gcContainer) {
      return
    }

    // initialize the GraphComponent
    const gc = new GraphComponent()

    // register interaction
    const inputMode = new GraphEditorInputMode()
    inputMode.allowGroupingOperations = true
    gc.inputMode = inputMode

    async function initializeGraph() {
      gc.graph = enableFolding(await loadGraph())

      gc.graph.lookup(
        FoldingManager.$class
      )!.masterGraph.undoEngineEnabled = true

      gc.fitGraphBounds()
    }

    enableGraphML(gc)
    initializeGraph()

    graphComponent.current = gc

    // Update the context
    setTimeout(setGraphComponent, 0, gc)

    gc.div.style.width = '100%'
    gc.div.style.height = '100%'
    gcContainer.append(gc.div)

    return () => {
      gc.cleanUp()
      graphComponent.current = undefined
      gcContainer.innerHTML = ''
    }
  }, [graphComponentContainer, setGraphComponent])

  return { graphComponentContainer, graphComponent }
}

/**
 * Enables loading and saving the graph to GraphML.
 */
function enableGraphML(graphComponent: GraphComponent) {
  // Create a new GraphMLSupport instance that handles save and load operations.
  // This is a convenience layer around the core GraphMLIOHandler class
  // that does all the heavy lifting. It adds support for commands at the GraphComponent level
  // and file/loading and saving capabilities.
  new GraphMLSupport({
    graphComponent: graphComponent,
    // configure to load and save to the file system
    storageLocation: StorageLocation.FILE_SYSTEM,
  })
}
