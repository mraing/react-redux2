const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 监听输入框
    case 'input_change':
      newState.inputValue = action.value
      return newState
    // 保存数据
    case 'save_item':
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    // 删除数据
    case 'del_item':
      newState.list.splice(action.index,1)
      return newState
    default:
      break;
  }
  return state
}