/**
 * Created by xiaoxudoo on 17/1/18.
 */
var isPro = !__DEV__
var proConf  = {
    apiHost: '',
    uploadImageHost: ''
};
var devConf = {
    apiHost: 'http://10.235.157.205:8080/service',
    uploadImageHost: 'https://unity.test.mgp.mi.com'
};

var Rxports = {
    hosts: isPro ? proConf : devConf,
    api: {
        
    },
    routeConfig: {
        ebank: {
            
        }
    }
}

module.exports = Rxports