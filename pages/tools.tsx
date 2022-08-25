import Container from '../components/Container/index'
import Tool from '../components/Tool/Tools'
import { ToolBox } from '../data/tools/toolBox'

const Tools = () => {
  return (
    <Container footer={false}>
      <div className='flex flex-col gap-6'>
        <h1 className='text-xl font-sfprodisplayregular'>Tech</h1>
        <div className='flex flex-col gap-2 text-secondary'>
          <p className="text-lg font-sfprodisplayregular">
          Some of the tools and technologies I have been using on a regular basis.
          </p>
        
        </div>

        <div>
          {/* Lazy */}
          {ToolBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(tool => (
            <Tool
              key={tool.name}
              name={tool.name}
        
              icon={tool.icon}
              url={tool.url}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Tools