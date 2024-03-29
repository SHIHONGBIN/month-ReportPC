import React from 'react';
import styles from '../../routes/IndexPage.scss'
import title from '../../assets/images/p1/p1imgtitle.png'
import img1 from '../../assets/images/p1/p1img2.png'
import img2  from '../../assets/images/p1/p1img1.png'
import aniamteStyles from '../../assets/css/animate.css'

const Page1 = (props) => {
  const dataIndex = props.dataIndex
  const {ajaxData} = props.props.indexTitle

  return (
    <div className={dataIndex==0?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.index2Box} ${styles.fadeIn}`:`${styles.index2Box} ${aniamteStyles.animated} ${aniamteStyles.fadeOut}`}>
      <div className={styles.index2Title}>
        <img src={title} className={dataIndex==0?`${aniamteStyles.animated} ${aniamteStyles.fadeIn}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}`} />
      </div>
      <div className={styles.index2Content}><div className={dataIndex===0?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.zs}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.zs}`}>国佳财富平台截止至{ajaxData[1]?ajaxData[1].data1:''}，平台成交量超过<span>{ajaxData[1]?ajaxData[1].data2:''}</span>万元，用户收益超<span>{ajaxData[1]?ajaxData[1].data3:''}</span>万元。今年平台接入了国家互联网应急中心实时数据报送系统，顺利完成了对资金存管系统的全新升级，平台一直坚守初心 ，在稳健发展、合规运营之路上前行，并与出借人携手共进，共创辉煌。</div>
        <div className={styles.index2BottomCon}>
        <div className={dataIndex==0?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild}`}>
            <img src={img1} alt='' />
            <div className={styles.stitle}>平台成交量</div>
            <div className={styles.line}></div>
            <div className={styles.showText} dangerouslySetInnerHTML={{__html:ajaxData[1]?ajaxData[1].data4:'0<span>元</span>'}}>
            </div>
          </div>
          <div  className={dataIndex===0?`${aniamteStyles.animated} ${aniamteStyles.fadeIn} ${styles.flexChild}`:`${aniamteStyles.animated} ${aniamteStyles.fadeOut}  ${styles.flexChild}`}>
            <img src={img2} alt='' />
            <div className={styles.stitle}>用户收益</div>
            <div className={styles.line}></div>
            <div className={styles.showText}  dangerouslySetInnerHTML={{__html:ajaxData[1]?ajaxData[1].data5:'0<span>元</span>'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page1.propTypes = {
};

export default Page1;
