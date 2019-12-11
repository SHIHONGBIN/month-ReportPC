import React from 'react';
import styles from '../routes/IndexPage.scss'
import aniamteStyles from '../assets/css/animate.css'
import Page1 from './index2Box/page1'
import Page2 from './index2Box/page2'
import Page3 from './index2Box/page3'
import Page4 from './index2Box/page4'
import Page5 from './index2Box/page5'
import Page6 from './index2Box/page6'
import Page7 from './index2Box/page7'


const Example = (props) => {
  const {pageIndex} = props.indexTitle
  const {dispatch} = props
  console.log(props)
  return (
    <div className={props.indexTitle.isFirstLoad2?`${styles.firstInit}`:`${styles.positionrelative}`}  style={{zIndex:props.indexTitle.pageIndex==1?"9999":"-999"}}  >
      <div className={pageIndex === 1? `${styles.index1bg} ${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${styles.index1bg} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}` } style={{opacity:0}}></div>
    <div className={pageIndex === 1? `${styles.index2} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.index2} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}` } style={{opacity:0}}>
      <div className={styles.navBox}>
      {props.navTitle.map((item, index)=>
        <div className={styles.navbg} key={index} onClick={()=>dispatch({type:'indexpage/changeNavIndex', payload:{navCurIndex:index}})}>
          <a className={props.navCurIndex === index? `${styles.navAHover}`:``}>{item}</a>
        </div>)}
      </div>
      <div className={styles.indexContent}>
        <div className={styles.lbtn} onClick={()=>dispatch({type:'indexpage/reduceNavIndex'})}></div>
        <div className={styles.rbtn} onClick={()=>dispatch({type:'indexpage/addNavIndex'})}></div>
        <Page1 dataIndex={props.navCurIndex} props={props} />
        <Page2 dataIndex={props.navCurIndex} props={props}  />
        <Page3 dataIndex={props.navCurIndex} props={props}  />
        <Page4 dataIndex={props.navCurIndex} props={props}  />
        <Page5 dataIndex={props.navCurIndex} props={props}  />
        <Page6 dataIndex={props.navCurIndex} props={props}  />
        <Page7 dataIndex={props.navCurIndex} props={props}  />
      </div>
    </div>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
