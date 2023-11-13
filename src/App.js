import {Component} from 'react'

import LanguageItem from './components/LanguageItem'
import TabItem from './components/TabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilterProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      eachProject => eachProject.id === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilterProjects()
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unorder">
          {languageGreetingsList.map(eachTab => (
            <TabItem
              key={eachTab.id}
              buttonDetails={eachTab}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === eachTab.id}
            />
          ))}
        </ul>
        <ul>
          {filteredProjects.map(eachProject => (
            <LanguageItem key={eachProject.id} languageDetails={eachProject} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
