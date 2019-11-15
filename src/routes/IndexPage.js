import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import Index1 from '../components/Index1'
import Index2 from '../components/Index2'
import Index3 from '../components/Index3'
import propTypes from 'prop-types'
import { Spin } from 'antd'
// import train from './../assets/images/train.png'
// import building from './../assets/images/building.png'
// import tree from './../assets/images/tree.png'
// import breege from './../assets/images/breege.png'
import aniamteStyles from '../assets/css/animate.css'

function IndexPage(props) {
  const { indexpage, dispatch } = props
  return (
    <div>
      <div className={styles.indexBox}>
        {Object.keys(props.indexpage.ajaxData).length ? <div className={styles.wrapBox}>
          {/* <img src={indexbg} alt='' /> */}
          <Index1 indexTitle={indexpage} dispatch={dispatch} />
          <Index2 navTitle={indexpage.navTitle} datas={props.indexpage} navCurIndex={indexpage.navCurIndex} dispatch={dispatch} indexTitle={indexpage} />
          <Index3 indexTitle={indexpage} dispatch={dispatch} />
        </div> : <Spin size="large" />}
        {/* <canvas id='canvas'></canvas> */}
         
          {/* <img src={building} alt='' className={`${styles.img4} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`} /> */}
          {/* <img src={train} alt='' className={`${styles.img3} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`} /> */}
          {/* <img src={tree} alt='' className={`${styles.img5} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`} /> */}
          {/* <img src={breege} alt='' className={`${styles.img8} ${aniamteStyles.animated} ${aniamteStyles.fadeInUp}`} />  */}
      </div>
    </div>
  );
}

IndexPage.propTypes = {
  indexpage: propTypes.object
};

const mapStateToProps = (state) => {
  return {
    indexpage: state.indexpage
  }
}

export default connect(mapStateToProps)(IndexPage);
