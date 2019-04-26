/**
 * function: 设置字典，将需要的字典请求回来
 * author  : wq
 * update  : 2018/12/29 9:58
 */
import { getDiscList } from '@/dic'
import {
  ProductKindList,
  InterviewListKind,
  HandleUser,
  SpecialApprovalTypes,
  DISC_CERT_TYPE,
  DISC_ACCOUNT_TYPE,
  DISC_AGREE_LOAN_SOURCE,
  DISC_REPAY_WAY,
  DISC_INCOME_TYPE,
  DISC_MERRY_TYPE,
  DISC_SEX_TYPE,
  DISC_RISK_LEVEL,
  DISC_REDEMPTION_PAY_WEY,
  DISC_TAIL_PAY_WEY,
  DISC_REDEMPTION_STATUS,
  DISC_REPAY_SOURCE,
  DISC_CHARGE_MODE,
  DISC_CHARGE_TIME,
  DISC_ASSOCIATE_TYPE,
  DISC_SELLER_SHIP_TYPE,
  DISC_BUYER_SHIP_TYPE,
  DISC_CUSTOMER_SHIP_TYPE,
  DISC_LOAN_NODE_QL,
  DISC_ORDER_STATUS,
  PLEDGE_STATUS,
  HOUSE_LAND_CERT_FLAG,
  TEST_CHANNEL,
  TEST_STATUS,
  RELATION_TYPE_JY,
  RELATION_TYPE_NJY,
  ACCOUNT_TYPE_CASH,
  SYQQDFS_DIC_FLAG,
  FCYT_DIC_FLAG,
  RELATION_TYPE_GUARANTY,
  ACCOUNT_TYPE,
  DISC_LOAN_TYPE,
  IMPORT_DOC_TYPE,
  IMPORT_DOC_EVENT_STATUS,
  RETURN_AMT_FROM,
  RANSOM_REPAY_TYPE,
  DISC_CRESIT_CHANNEL,
  DISC_RELATION_MORTGAGE,
  RANSOM_LOAN_TYPE,
  DISC_PRODUCT_TYPE,
  DISC_CREDIT_STATUS,
  DISC_AGREE_LOAN_TYPE,
  DISC_AGE_RALTION_TYPE,
  DISC_LITIGATED_FLAG,
  DISC_HOUSE_LIVE_STATUS,
  DISC_TEST_CHANNEL,
  DISC_DECORATION_DEGREE,
  CUSTOMER_IDENTITY,
  DICT_APPROVE_STATUS,
  Dist_List_Set
} from '@/config'
import { native_logMessage } from '@/utils/deal_native'

export default new Promise(function (resolve, reject) {
  // 从前端定义的字典不需要获取
  Dist_List_Set({ProductKindList, InterviewListKind, HandleUser,  SpecialApprovalTypes}, 'ProductKindList', 'InterviewListKind', 'HandleUser', 'SpecialApprovalTypes')
  // 获取数据字典
  getDiscList(
    DISC_CERT_TYPE, DISC_MERRY_TYPE, DISC_ACCOUNT_TYPE, DISC_REPAY_WAY, DISC_INCOME_TYPE, DISC_SEX_TYPE, DISC_RISK_LEVEL,
    DISC_REDEMPTION_PAY_WEY, DISC_TAIL_PAY_WEY, DISC_REDEMPTION_STATUS, DISC_REPAY_SOURCE, DISC_CHARGE_MODE, DISC_CHARGE_TIME,
    DISC_ASSOCIATE_TYPE, DISC_SELLER_SHIP_TYPE, DISC_BUYER_SHIP_TYPE, DISC_CUSTOMER_SHIP_TYPE, DISC_LOAN_NODE_QL, DISC_ORDER_STATUS,
    PLEDGE_STATUS, HOUSE_LAND_CERT_FLAG, TEST_CHANNEL, TEST_STATUS, RELATION_TYPE_JY, RELATION_TYPE_NJY, ACCOUNT_TYPE_CASH, IMPORT_DOC_EVENT_STATUS, DISC_AGREE_LOAN_SOURCE, DISC_TEST_CHANNEL,
    SYQQDFS_DIC_FLAG, FCYT_DIC_FLAG, RELATION_TYPE_GUARANTY, ACCOUNT_TYPE, DISC_LOAN_TYPE, IMPORT_DOC_TYPE, RETURN_AMT_FROM, RANSOM_REPAY_TYPE, DISC_LITIGATED_FLAG,
    DISC_CRESIT_CHANNEL, DISC_RELATION_MORTGAGE, RANSOM_LOAN_TYPE, DISC_PRODUCT_TYPE, DISC_CREDIT_STATUS, DISC_AGREE_LOAN_TYPE, DISC_AGE_RALTION_TYPE,
    DISC_HOUSE_LIVE_STATUS, DISC_DECORATION_DEGREE, CUSTOMER_IDENTITY,DICT_APPROVE_STATUS
  )
    .then(function (data) {
      native_logMessage('请求到字典数据')
      Dist_List_Set(
        data, DISC_CERT_TYPE, DISC_MERRY_TYPE, DISC_ACCOUNT_TYPE, DISC_REPAY_WAY, DISC_INCOME_TYPE, DISC_SEX_TYPE, DISC_RISK_LEVEL, PLEDGE_STATUS, DISC_AGREE_LOAN_SOURCE,
        DISC_REDEMPTION_PAY_WEY, DISC_TAIL_PAY_WEY, DISC_REDEMPTION_STATUS, DISC_REPAY_SOURCE, DISC_CHARGE_MODE, DISC_CHARGE_TIME,
        DISC_ASSOCIATE_TYPE, DISC_SELLER_SHIP_TYPE, DISC_BUYER_SHIP_TYPE, DISC_CUSTOMER_SHIP_TYPE, DISC_LOAN_NODE_QL, DISC_ORDER_STATUS,
        HOUSE_LAND_CERT_FLAG, TEST_CHANNEL, TEST_STATUS, RELATION_TYPE_JY, RELATION_TYPE_NJY, ACCOUNT_TYPE_CASH, SYQQDFS_DIC_FLAG, FCYT_DIC_FLAG, DISC_LITIGATED_FLAG,
        RELATION_TYPE_GUARANTY, ACCOUNT_TYPE, DISC_LOAN_TYPE, IMPORT_DOC_TYPE, IMPORT_DOC_EVENT_STATUS, RETURN_AMT_FROM, RANSOM_REPAY_TYPE, DISC_TEST_CHANNEL,
        DISC_CRESIT_CHANNEL, DISC_RELATION_MORTGAGE, RANSOM_LOAN_TYPE, DISC_PRODUCT_TYPE, DISC_CREDIT_STATUS, DISC_AGREE_LOAN_TYPE, DISC_AGE_RALTION_TYPE,
        DISC_HOUSE_LIVE_STATUS, DISC_DECORATION_DEGREE, CUSTOMER_IDENTITY,DICT_APPROVE_STATUS
      )
      resolve()
    })
    .catch(function() {
      reject()
    })
})
