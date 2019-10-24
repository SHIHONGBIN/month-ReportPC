import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p2/p2img8.png'
import img1 from '../../assets/images/p2/p2img7.png'
import img2  from '../../assets/images/p2/p2img6.png'
import aniamteStyles from '../../assets/css/animate.css'

const Page2 = (props) => {
  const dataIndex = props.dataIndex
  const {ajaxData} = props.props.indexTitle
  return (
    <div className={dataIndex==1?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title}  className={dataIndex==1?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={styles.index2Content}>
        {/* <div className={styles.zs}></div> */}
        <div className={styles.index2BottomCon}>
        <div  className={dataIndex===1?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}   ${styles.flexChild}`}>
            <img src={img1} alt='' />
            <div className={styles.stitle}>累计成交量</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[2]?ajaxData[2].data1:'0<span>元</span>'}}> 
            </div>
          </div>
          <div  className={dataIndex===1?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild}`}>
            <img src={img2} alt='' />
            <div className={styles.stitle}>新增成交量</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[2]?ajaxData[2].data2:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page2.propTypes = {
};

export default Page2;
