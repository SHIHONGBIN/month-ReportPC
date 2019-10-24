import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p5/title.png'
import img1 from '../../assets/images/p5/p51.png'
import img2  from '../../assets/images/p5/p55.png'
import aniamteStyles from '../../assets/css/animate.css'

const Page5 = (props) => {
  const dataIndex = props.dataIndex
  const {ajaxData} = props.props.indexTitle
  // console.log(ajaxData)
  return (
    <div className={dataIndex==4?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title}   className={dataIndex==4?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}  />
      </div>
      <div className={styles.index2Content}>
        <div className={styles.index2BottomCon}>
        <div className={dataIndex===4?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild}`}>
        <div className={styles.imgBox}><img src={img1} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月份借款人已还本金</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:!ajaxData[5]?ajaxData[5].data1:'0<span>元</span>'}}>
            </div>
          </div>
          <div className={dataIndex===4?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild}`}>
          <div className={styles.imgBox}><img src={img2} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月份借款人已还利息</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[5]?ajaxData[5].data2:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page5.propTypes = {
};

export default Page5;
