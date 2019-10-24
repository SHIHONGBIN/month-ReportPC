import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p4/title.png'
import img1 from '../../assets/images/p4/p41.png'
import img2 from '../../assets/images/p4/p42.png'
import img3 from '../../assets/images/p4/p43.png'
import img4 from '../../assets/images/p4/p44.png'
import aniamteStyles from '../../assets/css/animate.css'

const Page4 = (props) => {
  const dataIndex = props.dataIndex
  const {ajaxData} = props.props.indexTitle
  // console.log(ajaxData)
  return (
    <div className={dataIndex==3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title}   className={dataIndex==3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={`${styles.index2Content} ${styles.index2Content4}`}>
        <div className={`${styles.index2BottomCon} ${styles.index2BottomCon2}`}>
        <div className={dataIndex===3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild2}`}>
            <div className={styles.imgBox}><img src={img1} alt='' /></div>
            <div className={styles.stitle}>累计赚取收益</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[4]?ajaxData[4].data1:'0<span>元</span>'}}>
            </div>
          </div>
          <div className={dataIndex===3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild2}`}>
          <div className={styles.imgBox}><img src={img2} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月新增受益</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[4]?ajaxData[4].data2:'0<span>元</span>'}}>
            </div>
          </div>
          <div className={dataIndex===3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild2}`}>
          <div className={styles.imgBox}><img src={img3} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月收益的用户人群</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[4]?ajaxData[4].data3:'0<span>元</span>'}}>
            </div>
          </div>
          <div className={dataIndex===3?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild2}`}>
          <div className={styles.imgBox}><img src={img4} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月人均收益金额</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[4]?ajaxData[4].data4:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page4.propTypes = {
};

export default Page4;
