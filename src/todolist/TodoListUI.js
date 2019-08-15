import React from 'react'

// 无状态组件
const TodoListUI = (props)=> {
  let { inputValue, inputChange, saveItem, list, delItem } = props
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={saveItem}>新增</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index + item} onClick={delItem.bind(this,index)}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoListUI