import React from 'react'
import PageSelector from './component/PageSelector'
import Button from './component/Button'
import CheckboxColunm from './component/CheckboxColunm'
import AllPagesChecklist from './component/AllPagesChecked'

const App = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-400 min-h-screen p-4 gap-4">
      {/* Components will stack vertically on small screens and horizontally on medium+ */}
      <Button />
      <CheckboxColunm />
      <AllPagesChecklist />
      <PageSelector />
    </div>
  )
}

export default App
