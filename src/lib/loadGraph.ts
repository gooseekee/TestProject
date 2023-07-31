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

import { project } from './Projection'
import {
  buildEdgeCreator,
  buildEdgesSourceData,
  buildGraph,
  buildLabelConfiguration,
  buildNodeCreator,
  buildNodesSourceData,
} from './GraphBuilder'
import { arrange } from './Layout'

/**
 * This is automatically generated source code. It is largely undocumented and not necessarily
 * instructive, nor the best way to solve a given task. If you want to learn more about the
 * yFiles API, as a starting point, please consider the more instructive source code tutorial and
 * more than 200 examples on https://live.yworks.com - you will also find the complete sources to
 * these demos for you to play with as part of the evaluation package and online at
 * https://github.com/yWorks/yfiles-for-html-demos/
 * The API documentation is also available online, here: https://docs.yworks.com/yfileshtml - Enjoy!
 */
export default async function loadGraph() {
  const labelConfiguration = await buildLabelConfiguration({
    textBinding: (item) => item.name,
    placement: () => 'topright',
    fill: () => '#eeeeee',
  })
  const nodeCreator = await buildNodeCreator([labelConfiguration], {
    styleProvider: 'GroupNodeStyle',
    fill: () => '#eeeeee',
    shape: () => 'rectangle',
    stroke: () => '#242265',
    tabFill: () => '#242265',
  })
  const labelConfiguration2 = await buildLabelConfiguration({
    textBinding: (item) => item.name,
    placement: () => 'top',
    fill: () => '#333333',
  })
  const labelConfiguration3 = await buildLabelConfiguration({
    textBinding: (item) => item.position,
    placement: () => 'bottom',
    fill: () => '#eeeeee',
  })
  const nodeCreator2 = await buildNodeCreator(
    [labelConfiguration3, labelConfiguration2],
    {
      width: () => 160,
      height: () => 50,
      styleProvider: 'ShapeNodeStyle',
      fill: () => 'dodgerblue',
      shape: () => 'rectangle',
      stroke: () => 'dodgerblue',
    }
  )
  const labelConfiguration4 = await buildLabelConfiguration({
    textBinding: (item) => item.label,
    placement: () => 'center',
    fill: () => '#eee',
  })
  const edgeCreator = await buildEdgeCreator([labelConfiguration4], {
    stroke: () => '#CC0000',
    sourceArrow: () => 'none',
    targetArrow: () => 'default',
  })
  const value =
    '{\n"nodes" : [\n    {\n      "id": 1,\n      "group": "group0",\n      "name": "X3"\n    },\n    {\n      "id": 2,\n      "group": "group0",\n      "name": "IE"\n    },\n    {\n      "id": 3,\n      "group": "group0",\n      "name": "U1.A/X1"\n    },\n    {\n      "id": 4,\n      "group": "group0",\n      "name": "U2.A/X1"\n    },\n    {\n      "id": 5,\n      "group": "group0",\n      "name": "U1.B/X1"\n    },\n    {\n      "id": 6,\n      "group": "group0",\n      "name": "U2.B/X1"\n    },\n    {\n      "id": 7,\n      "group": "group0",\n      "name": "U1.03/X1"\n    },\n    {\n      "id": 8,\n      "group": "group0",\n      "name": "U1.05/X1"\n    },\n    {\n      "id": 9,\n      "group": "group0",\n      "name": "U1.06/X1"\n    },\n    {\n      "id": 10,\n      "group": "group0",\n      "name": "X3/IE"\n    },\n    {\n      "id": 11,\n      "group": "group0",\n      "name": "U1.01/X1"\n    },\n    {\n      "id": 12,\n      "group": "group0",\n      "name": "U1.02/X1"\n    },\n    {\n      "id": 13,\n      "group": "group0",\n      "name": "U1.04/X1"\n    },\n    {\n      "id": 14,\n      "group": "group0",\n      "name": "X4/IE"\n    },\n    {\n      "id": 30,\n      "group": "group1",\n      "name": "U1.500A/RS-485 IS/RS-485"\n    },\n    {\n      "id": 31,\n      "group": "group1",\n      "name": "U1.500B/RS-485 IS/RS-485"\n    }\n],\n"edges": [\n    {\n    "fromNode": 1,\n    "toNode": 7\n    },\n    {\n    "fromNode": 1,\n    "toNode": 8\n    },\n    {\n    "fromNode": 1,\n    "toNode": 9\n    },\n    {\n    "fromNode": 1,\n    "toNode": 10\n    },\n    {\n    "fromNode": 1,\n    "toNode": 11\n    },\n    {\n    "fromNode": 1,\n    "toNode": 12\n    },\n    {\n    "fromNode": 1,\n    "toNode": 13\n    },\n    {\n    "fromNode": 2,\n    "toNode": 10\n    },\n    {\n    "fromNode": 2,\n    "toNode": 14\n    },\n    {\n    "fromNode": 3,\n    "toNode": 30\n    },\n    {\n    "fromNode": 4,\n    "toNode": 3\n    },\n    {\n    "fromNode": 5,\n    "toNode": 31\n    },\n    {\n    "fromNode": 6,\n    "toNode": 5\n    }\n],\n"groups": [\n    {\n    "id": "group0",\n    "name": "A-87JF001I"\n    },\n    {\n    "id": "group1",\n    "name": "A-87JC001"\n    }\n]\n}'
  const data = JSON.parse(value)
  const out = await project(data, { binding: (item) => item.groups })
  const nodesSource = await buildNodesSourceData(
    { data: out, nodeCreator },
    {
      idProvider: (item) => item.id,
      parentIdProvider: (item) => item.parentGroup,
    }
  )
  const out2 = await project(data, { binding: (item) => item.edges })
  const edgesSource = await buildEdgesSourceData(
    { data: out2, edgeCreator },
    {
      sourceIdProvider: (item) => item.fromNode,
      targetIdProvider: (item) => item.toNode,
    }
  )
  const out3 = await project(data, { binding: (item) => item.nodes })
  const nodesSource2 = await buildNodesSourceData(
    { data: out3, nodeCreator: nodeCreator2 },
    { idProvider: (item) => item.id, parentIdProvider: (item) => item.group }
  )
  const graph = await buildGraph({
    nodesSources: [nodesSource2, nodesSource],
    edgesSources: [edgesSource],
  })
  const out4 = await arrange(graph, {
    worker: false,
    name: 'HierarchicLayout',
    properties: {
      layoutOrientation: 'left-to-right',
      integratedEdgeLabeling: true,
      nodeToNodeDistance: 55,
      automaticEdgeGrouping: false,
    },
  })

  return out4
}
