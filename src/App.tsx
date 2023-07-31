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

import { useState } from 'react'
import './App.css'
import logo from './assets/yWorksLogo.png'
import ReactGraphComponent from './components/ReactGraphComponent'
import Toolbar from './components/Toolbar'
import { GraphComponent } from 'yfiles'
import { GraphComponentContext } from './lib/GraphComponentContext'
import ReactGraphOverviewComponent from './components/GraphOverviewComponent'
import { UserInputDialog } from './components/UserInputDialog'

function App() {
  const graphComponentState = useState<GraphComponent | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div className="app">
      <GraphComponentContext.Provider value={graphComponentState}>
        <div className="header">
          <div className="title">TestProject</div>
          <Toolbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <UserInputDialog />
        <div className="main">
          <ReactGraphComponent searchQuery={searchQuery} />
        </div>
        <div style={{ position: 'absolute', left: '20px', top: '68px' }}>
          <ReactGraphOverviewComponent />
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '15px' }}>
          <a
            href="https://yworks.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '10px' }}
          >
            <img
              src={logo}
              style={{ height: '50px', width: '50px' }}
              alt="yWorks Logo"
            />
          </a>
        </div>
      </GraphComponentContext.Provider>
    </div>
  )
}

export default App