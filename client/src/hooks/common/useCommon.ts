import { computed, Ref, ref } from 'vue';

export const useModal = () => {
  
  const modalState = ref(false);

  const setModalState = (state : boolean) => {
    modalState.value = state; 
  }

  const getModalState = computed(() => modalState.value);


  return { 
    getModalState,
    setModalState
  }
}

const equipment = {
  getEquipmentList : ():Array<string> => {
    return ['1','2']
  }
}

interface EquipmentRes  {
  data : Array<string>
}

export const useEquipment = () => {
  
  const equipmentList:Ref<Array<String>> = ref([]);

  const setEquipmentList = (list : Array<string>) => {
    equipmentList.value = list; 
  }

  const fetchEquipmentList = async () => {
    try {
      const res: EquipmentRes = await equipment.getEquipmentList();
      setEquipmentList(res.data ?? []);

    } catch(error) {
      console.error(error);
    }
  }



  return { 
    setEquipmentList
  }
}


