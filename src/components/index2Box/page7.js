import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p7/title.png'
import p71 from '../../assets/images/p7/p71.png'
import p75 from '../../assets/images/p7/p75.png'
import p77 from '../../assets/images/p7/p77.png'
import p78 from '../../assets/images/p7/p78.png'
import p76 from '../../assets/images/p7/p76.png'
import aniamteStyles from '../../assets/css/animate.css'

const Page7 = (props) => {
  const dataIndex = props.dataIndex
  const { ajaxData } = props.props.indexTitle
  return (
    <div className={dataIndex==6?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title}   className={dataIndex==6?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={`${styles.index2Content} ${styles.index2Content7}`}>
        {/* <div className={styles.zs}></div> */}
        <div className={styles.index2BottomCon}>
          <div className={styles.flexChild}>
        <div className={dataIndex==6?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChildCon} ${styles.flexChildCon2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut} ${styles.flexChildCon} ${styles.flexChildCon2}`}>
            <div className={styles.imgBox}><img src={p76} alt='' /></div>
            <div className={styles.stitle}>累计注册用户</div>
            <div className={styles.line}></div>
            <div className={styles.showText}  dangerouslySetInnerHTML={{__html:ajaxData[7]?ajaxData[7].data1:''}}>
            </div>
          </div>
          <div  className={dataIndex==6?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChildCon} ${styles.flexChildCon2}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut} ${styles.flexChildCon} ${styles.flexChildCon2}`}>
          <div className={styles.imgBox}><img src={p71} alt='' /></div>
            <div className={styles.stitle}>{ajaxData[0]?ajaxData[0].month:''}月新增注册用户</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:!ajaxData[7]?ajaxData[7].data2:'0<span>人</span>'}}>
            </div>
          </div>
          </div>
          <div  className={dataIndex==6?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild} ${styles.flexChildRight}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut} ${styles.flexChild} ${styles.flexChildRight}`}>
            <div className={styles.humanBox}>
              <img src={p75} alt='' />
            </div>
            <div className={styles.humanBox}>
              <p>用户注册性别占比</p>
              <div className={styles.humanCon}>
                <img src={p78} alt=""/>
                <div className={styles.humanNum} data-hunmans={`${ajaxData[7]?ajaxData[7].data3:''}%`} style={{width:`${ajaxData[7]?ajaxData[7].data3:''}%`}}></div>
              </div>
              <div className={styles.humanCon}>
                <img src={p77} alt=""/>
                <div className={styles.humanNum} data-hunmans={`${ajaxData[7]?ajaxData[7].data4:''}%`} style={{width:`${ajaxData[7]?ajaxData[7].data4:''}%`}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page7.propTypes = {
};

export default Page7;
