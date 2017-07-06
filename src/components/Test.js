import React, { Component } from 'react';

class Test extends Component {
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.f_for.bind(this)} type="button">for</button>
        <button onClick={this.f_destructuring.bind(this)} type="button">destructuring</button>
        <button onClick={this.f_string.bind(this)} type="button">string</button>
        <button onClick={this.f_regex.bind(this)} type="button">regex</button>
      </div>
    );
  } 

  // 组件的生命周期
  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpdate( nextProps,  nextState){

  }

  componentDidUpdate( prevProps,  prevState){

  }

  componentWillUnmount(){

  }

  // 已加载组件收到新的参数时调用
  componentWillReceiveProps(props){

  }

  // 组件判断是否重新渲染时调用
  shouldComponentUpdate(nextProps,  nextState){

  }

  // let
  f_for(){
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }

  f_string(){
    // 字符串的遍历器接口
    for (let codePoint of 'foo') {
      console.log(codePoint)
    }

    // includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
    var s = 'Hello world!';
    console.log(s.startsWith('Hello')); // true
    console.log(s.endsWith('!')); // true
    console.log(s.includes('o')); 

    // repeat方法返回一个新字符串，表示将原字符串重复n次。
    console.log('x'.repeat(3)); // "xxx"
    console.log('hello'.repeat(2)); // "hellohello"
    console.log('na'.repeat(0)); // 

    // 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
    console.log('x'.padStart(5, 'ab')); // 'ababx'
    console.log('x'.padStart(4, 'ab')); // 'abax'
    console.log('x'.padEnd(5, 'ab')); // 'xabab'
    console.log('x'.padEnd(4, 'ab')); // 'xaba'
     
    // 补齐编码  
    console.log('12'.padStart(5, '0')); 
  }

  // 正则表达式 
  f_regex(){
    // 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag
    var regex = new RegExp('xyz', 'i');
    // 等价于
    var regex = /xyz/i;

    // 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
    var regex = new RegExp(/xyz/i);
    // 等价于
    var regex = /xyz/i;


    // 字符串的正则方法
    // 字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。
    // 修饰符：g--全局搜索 i--忽略大小） m--多行
    var regex = new RegExp(/is/g);
    console.log('He is a boy. This is a dog. Where is she?'.replace(regex, 'IS'));
    console.log('He is a boy. This is a dog. Where is she?'.match(regex));
    console.log('He is a boy. This is a dog. Where is she?'.search(regex));
    console.log('He is a boy. This is a dog. Where is she?'.split(regex));

    var regex = /is/g;
    console.log('He is a boy. This is a dog. Where is she?'.replace(regex, 'IS'));



  }
  
  // 解构赋值:从数组和对象中提取值，对变量进行赋值，这被称为解构
  f_destructuring(){
    // 数组
    let [a, b, c] = [1, 2, 3];
    console.log(a);
    console.log(b);
    console.log(c);
     
    // 对象
    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    console.log(foo);
    console.log(bar);

    let obj = { first: 'hello', last: 'world' };
    let { first: f, last: l } = obj;
    console.log(f);
    console.log(l);

   // 字符串
    const [a1, b1, c1, d1, e1] = 'hello';
    console.log(a1);
    console.log(b1);
    console.log(c1);
    console.log(d1);
    console.log(e1);

    // 数值和布尔值

    // 函数参数
    function add([x, y]){
      return x + y;
    }
    console.log(add([1, 2])); // 3
  }



}

export default Test;