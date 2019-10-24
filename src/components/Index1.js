import React from 'react';
import indexTitle from './../assets/images/indextitle.png'
import indextext1 from './../assets/images/indextext.png'
import indextextbtn from './../assets/images/indexbtn.png'
import styles from '../routes/IndexPage.scss'
import aniamteStyles from '../assets/css/animate.css'
import rbtn from '../assets/images/rbtn.png'

const Index1 = (props) => {
  const {monthTitle, pageIndex} = props.indexTitle
  const {dispatch} = props
  const {ajaxData} = props.indexTitle
  return (
    <div className={`${styles.index1Box}`} style={{zIndex:props.indexTitle.pageIndex==0?"9999":"-999"}}   >
      <div className={pageIndex === 0? ``:`${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`}>
      <img src={indexTitle} alt='' className={pageIndex===0?`${styles.img1} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img1} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} />
      <img src={indextext1} alt='' className={pageIndex===0?`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} />
      {/* <img src={train} alt=''  className={pageIndex===0?`${styles.img3} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img3} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} />
      <img src={building} alt=''  className={pageIndex===0?`${styles.img4} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img4} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} />
      <img src={tree} alt=''  className={pageIndex===0?`${styles.img5} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img5} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} />
     */}
     
      <img src={rbtn} alt=''  className={pageIndex===0?`${styles.img7} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img7} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`} onClick={()=>dispatch({type: 'indexpage/pageIndexChange', payload:{pageIndex:1}})} />
      {/* <img src={breege}  alt='' className={pageIndex===0?`${styles.img8} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} /> */}
      </div>
      {/* <div className={pageIndex === 0? ``:`${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`}> */}
      {/* <img src={stext1}  alt='' className={pageIndex===0?`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img2} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} /> */}
      <div className={pageIndex===0?`${styles.img6} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`:`${styles.img6} ${aniamteStyles.animated} ${aniamteStyles.fadeOutUp}`}  onClick={()=>dispatch({type: 'indexpage/pageIndexChange', payload:{pageIndex:1}})}>
         <img src={indextextbtn} alt='' />
      </div>
      </div>
    // </div>
  );
};

Index1.propTypes = {
};

export default Index1;
