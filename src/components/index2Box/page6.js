import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p6/title.png'
import Echarts from '../utils/echarts2'
import aniamteStyles from '../../assets/css/animate.css'

const Page6 = (props) => {
  const dataIndex = props.dataIndex
  const { ajaxData } = props.props.indexTitle
  // console.log(ajaxData)
  return (
    <div className={dataIndex==5?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title} className={dataIndex == 5 ? `${aniamteStyles.animated} ${aniamteStyles.fadeIn}` : `${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={styles.index2Content}>
        {/* <div className={styles.zs}></div> */}
        <div className={styles.index2BottomCon}>
          <div className={styles.flexChild}>
            <Echarts props={ajaxData[6]} />
          </div>
          <div className={styles.flexChild}>
            <div className={styles.bdRightBox}>
            {ajaxData[6] ? ajaxData[6].data2.map((item, index) => {
              return <div className={dataIndex === 5 ? `${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChildCon}` : `${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChildCon}`} key={index}>
                <div data-color={ajaxData[6]?ajaxData[6].data1[index]:''} className={styles.bdtitle} style={{color:`${ajaxData[6]?ajaxData[6].data1[index]:''}`}}>期限{item.name}天标：{item.value}个</div>
                <div className={styles.bdtitleIcon} style={{backgroundColor:`${ajaxData[6].data1[index]}`}}></div>
                <div className={styles.bdcontent} dangerouslySetInnerHTML={{__html:item?`<span>总金额</span>${item.money}`:''}}>
                </div>
              </div>
            }) : ''}
            <div className={styles.flexChildCon}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page6.propTypes = {
};

export default Page6;
