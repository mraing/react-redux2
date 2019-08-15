import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  render() {
    let { inputValue, inputChange, saveItem, list, delItem } = this.props
    return (
      <div>
        <TodoListUI
          inputValue={inputValue}
          inputChange={inputChange}
          saveItem={saveItem}
          list={list}
          delItem={delItem}
        />
      </div>
    )
  }
}

// 映射关系
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 派发数据
const dispathchToProps = (dispatch) => {
  return {
    // 监听数据
    inputChange(e) {
      let action = {
        type: 'input_change',
        value: e.target.value
      }
      dispatch(action)
    },
    // 保存数据
    saveItem() {
      const action = {
        type: 'save_item'
      }
      dispatch(action)
    },
    // 删除数据
    delItem(index) {
      const action = {
        type: 'del_item',
        index: index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispathchToProps)(TodoList)