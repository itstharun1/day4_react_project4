import {Component} from 'react'

import TabItem from '../TabItem'

import ProjectItem from '../ProjectItem'

import './index.css'

const tabsList = [
    {tabId: 'STATIC', displayText: 'Prabas'},
    {tabId: 'RESPONSIVE', displayText: 'Vijay Dewarakonda'},
    {tabId: 'DYNAMIC', displayText: 'Ram Charan'},
  ]

  const projectsList = [
    {
      projectId: 0,
      category: 'STATIC',
      imageURL: '',
      title: '',
    },
    {
      projectId: 1,
      category: 'STATIC',
      imageURL: '',
      title: '',
    },
    {
        projectId: 3,
        category: 'STATIC',
        imageURL: '',
        title: '',
      },
    {
        projectId: 4,
        category: 'STATIC',
        imageURL: '',
        title: '',
      },
      {
        projectId: 5,
        category: 'STATIC',
        imageURL: '',
        title: '',
      },
      {
        projectId: 6,
        category: 'STATIC',
        imageURL: '',
        title: '',
      },
      {
        projectId: 7,
        category: 'RESPONSIVE',
        imageURL: '',
        title: '',
      },
      {
        projectId: 8,
        category: 'RESPONSIVE',
        imageURL: '',
        title: '',
      },
      {
          projectId: 9,
          category: 'RESPONSIVE',
          imageURL: '',
          title: '',
        },
        {
          projectId: 10,
          category: 'RESPONSIVE',
          imageURL: '',
          title: '',
        },
        {
          projectId: 11,
          category: 'RESPONSIVE',
          imageURL: '',
          title: '',
        },
        {
          projectId: 12,
          category: 'RESPONSIVE',
          imageURL: '',
          title: '',
        },
        {
            projectId: 13,
            category: 'DYNAMIC',
            imageURL: '',
            title: '',
          },
          {
            projectId: 14,
            category: 'DYNAMIC',
            imageURL: '',
            title: '',
          },
          {
              projectId: 15,
              category: 'DYNAMIC',
              imageURL: '',
              title: '',
            },
            {
              projectId: 16,
              category: 'DYNAMIC',
              imageURL: '',
              title: '',
            },
            {
              projectId: 17,
              category: 'DYNAMIC',
              imageURL: '',
              title: '',
            },
            {
              projectId: 18,
              category: 'DYNAMIC',
              imageURL: '',
              title: '',
            }
]



class Project extends Component{

    state={
        activeTabId:tabsList[0].tabId,
    }
    clickTabItem = tabValue => {
        this.setState({activeTabId: tabValue})

      }

      getFilteredProjects = () => {
        const {activeTabId} = this.state
        const filteredProjects = projectsList.filter(
          eachprojectDetails => eachprojectDetails.category === activeTabId,
        )
        return filteredProjects
      }



    render() {
        const {activeTabId}=this.state
        console.log(activeTabId)
        const filteredProjects = this.getFilteredProjects()

      return (
        <div className='bg1'>
            <h1 className='heading'>Best Movies</h1>
               <div className='btns'>
                       {tabsList.map((eachItem)=>(
                          <TabItem
                           clickTabItem={this.clickTabItem} 
                           eachItem={eachItem} 
                           key={eachItem.tabId} 
                           isActive={activeTabId === eachItem.tabId} />
                           ))}
               </div>
               <div className='projectList'>
                {filteredProjects.map((each)=>(
                    <ProjectItem each={each}/>
                ))}
               </div>
        </div>
      )
    }
}

export default Project