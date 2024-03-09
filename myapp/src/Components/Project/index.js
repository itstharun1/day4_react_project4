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
      imageURL: 'https://i.pinimg.com/474x/b8/8b/fe/b88bfe536e5b3d7decba287c100d1dc2.jpg',
      title: 'Chatrapathi',
    },
    {
      projectId: 1,
      category: 'STATIC',
      imageURL: 'https://c.ndtvimg.com/2021-07/daq7cq2_prabhas_625x300_10_July_21.jpg',
      title: 'Baahubali-1',
    },
    {
        projectId: 3,
        category: 'STATIC',
        imageURL: 'https://miro.medium.com/v2/resize:fit:640/1*R50fsgwk-mpK7bmk-d_kDw.jpeg',
        title: 'Baahubali-2',
      },
    {
        projectId: 4,
        category: 'STATIC',
        imageURL: 'https://static.toiimg.com/thumb/msid-105257582,width-1280,height-720,resizemode-4/105257582.jpg',
        title: 'Kalki-2898AD',
      },
      {
        projectId: 5,
        category: 'STATIC',
        imageURL: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/adipurush-sixteen_nine.jpeg?VersionId=dBaVpabAHBemra_oNQV5C46PBlICE4lD',
        title: 'Adipurush',
      },
      {
        projectId: 6,
        category: 'STATIC',
        imageURL: 'https://c.ndtvimg.com/2019-07/rq9pa168_saaho-youtube_625x300_19_July_19.jpg',
        title: 'Saaho',
      },
      {
        projectId: 7,
        category: 'RESPONSIVE',
        imageURL: 'https://thesouthfirst.com/wp-content/uploads/2023/08/F41Ch25bcAA3Cm9.jpg',
        title: 'Kushi',
      },
      {
        projectId: 8,
        category: 'RESPONSIVE',
        imageURL: 'https://www.koimoi.com/wp-content/new-galleries/2022/09/ligers-south-distributor-warangal-srinu-talked-about-how-he-lost-65-per-cent-of-his-investment-on-the-film-001.jpg',
        title: 'Liger',
      },
      {
          projectId: 9,
          category: 'RESPONSIVE',
          imageURL: 'https://qph.cf2.quoracdn.net/main-qimg-04b8b1c3790fa807098ae4e7fd3c9178-lq',
          title: 'Geetha Govindham',
        },
        {
          projectId: 10,
          category: 'RESPONSIVE',
          imageURL: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/08/26/Pictures/_4d330f4e-8a54-11e7-817c-4caf18ee223c.jpg',
          title: 'Arjun Reddy',
        },
        {
          projectId: 11,
          category: 'RESPONSIVE',
          imageURL: 'https://www.behindwoods.com/telugu-movies/taxiwala/stills-photos-pictures/taxiwala-stills-photos-pictures-02.jpg',
          title: 'Taxiwaala',
        },
        {
          projectId: 12,
          category: 'RESPONSIVE',
          imageURL: 'https://images.deccanchronicle.com/dc-Cover-7mn9pi396omseviphfdl3p1ed2-20181007151630.Medi.jpeg',
          title: 'NOTA',
        },
        {
            projectId: 13,
            category: 'DYNAMIC',
            imageURL: 'https://deadline.com/wp-content/uploads/2022/04/RAM-CHARAN-1.jpg',
            title: 'RRR',
          },
          {
            projectId: 14,
            category: 'DYNAMIC',
            imageURL: 'https://data1.ibtimes.co.in/en/full/757223/ram-charan-shankar-shanmugam-movie.jpg?h=450&l=50&t=40',
            title: 'Rangasthalam',
          },
          {
              projectId: 15,
              category: 'DYNAMIC',
              imageURL: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/CharanDhruva.jpg?VersionId=Q_rlM9Bzqr4DgXZHNjoLRmTKIKYdqWLW',
              title: 'Dhruva',
            },
            {
              projectId: 16,
              category: 'DYNAMIC',
              imageURL: 'https://i.pinimg.com/736x/3b/21/3a/3b213aaa98e6393722af212652003b30.jpg',
              title: 'Magadheera',
            },
            {
              projectId: 17,
              category: 'DYNAMIC',
              imageURL: 'https://m.media-amazon.com/images/M/MV5BYjk2MDZmNzAtZTk1YS00YTM1LWE3Y2UtNWMyOWE4NDM5ZDAwXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg',
              title: 'Naayak',
            },
            {
              projectId: 18,
              category: 'DYNAMIC',
              imageURL: 'https://image.ntnews.com/wp-content/uploads/2023/03/charan_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=400&p=false&r=2.625',
              title: 'Orange',
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