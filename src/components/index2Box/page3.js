import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p3/title.png'
import p3img from '../../assets/images/p3/p3img1.png'
import Echarts from '../utils/eachrts'
import aniamteStyles from '../../assets/css/animate.css'

const Page3 = (props) => {
  const dataIndex = props.dataIndex
  const {ajaxData} = props.props.indexTitle

  return (
    <div className={dataIndex==2?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title}  className={dataIndex==2?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={styles.index2Content}>
        {/* <div className={styles.zs}></div> */}
        <div className={styles.index2BottomCon}>
        <div className={styles.flexChild}>
            <Echarts props = {ajaxData[3]} />
            <img src={p3img} alt="" className={styles.page3img}/>
          </div>
          <div className={styles.flexChild}>
          <div className={dataIndex===2?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexBox}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexBox}`}>
              <div className={styles.lflex} dangerouslySetInnerHTML={{__html:ajaxData[3]?ajaxData[3].data2:''}} style={{marginTop:'10px'}}>
                {/* 94<span>%</span> */}
              </div>
              <div className={styles.cflex}></div>
              <div className={styles.rflex}>
                <p>自动出借金额</p>
                <p dangerouslySetInnerHTML={{__html:ajaxData[3]?ajaxData[3].data4:'0<span>元</span>'}}></p>
              </div>
            </div>
            <div className={dataIndex===2?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexBox}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexBox}`}>
              <div className={styles.lflex} dangerouslySetInnerHTML={{__html:ajaxData[3]?ajaxData[3].data3:''}}  style={{marginTop:'10px'}}>
                {/* 94<span>%</span> */}
              </div>
              <div className={styles.cflex}></div>
              <div className={styles.rflex}>
                <p>手动出借金额</p>
                <p dangerouslySetInnerHTML={{__html:ajaxData[3]?ajaxData[3].data5:'0<span>元</span>'}}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page3.propTypes = {
};

export default Page3;
