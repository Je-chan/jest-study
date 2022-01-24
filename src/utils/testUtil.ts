import { Ref, ref } from 'vue';

const usePopMsg = () => {
  const renderMsg  : Ref<string | null> = ref(null);

  const getMsg = (msg : string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('123')
        renderMsg.value = msg
        if(msg==='Error') {
          reject('Error')
        } else {
          resolve(renderMsg)
        }
      }, 1000);
    })
    } 


  return {renderMsg, getMsg}
}


export default usePopMsg