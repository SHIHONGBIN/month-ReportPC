import React from 'react';
// import pepole14_iSpt from '../assets/images/pepole14_iSpt.png'
import wxcode from '../assets/images/wxcode.png'
// import arrowRight from '../assets/images/arrowRight.png'
import styles from '../routes/IndexPage.scss'
import aniamteStyles from '../assets/css/animate.css'


const Index1 = (props) => {
  const {monthTitle, pageIndex} = props.indexTitle
  const {dispatch} = props
  return (
    <div  className={props.indexTitle.isFirstLoad3?`${styles.firstInit}`:``}  style={{zIndex:props.indexTitle.pageIndex==2?"9999":"-999"}}  >
    <div className={pageIndex === 2 ?`${styles.index1Box} ${styles.index3Box} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.index1Box} ${styles.index3Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} >
      <div className={styles.lbtn} onClick={()=>dispatch({type:'indexpage/goIndex2'})}></div>
      <p className={pageIndex===2?`${styles.index3Text} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.index3Text} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>如果您还想了解国佳财富更多的动态信息<br />
请关注我们的<span>国佳财富服务号</span></p>
      <img src={wxcode}  alt='' className={pageIndex===2?`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      <div className={pageIndex===2?`${styles.rightbtn} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.rightbtn} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}  onClick={()=>dispatch({type: 'indexpage/pageIndexChange0', payload:{pageIndex:0}})}>
      返回首页
      </div>
    </div>
    </div>
  );
};

Index1.propTypes = {
};

export default Index1;
