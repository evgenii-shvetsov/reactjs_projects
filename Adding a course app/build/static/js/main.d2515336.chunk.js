(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),o=n(8),c=n.n(o),a=n(7),i=n(2),u=n(3),l=n(5),d=n(4),h=n(0);var p=function(e){return Object(h.jsxs)("li",{className:"course-item",children:[Object(h.jsx)("input",{type:"checkbox",checked:e.course.completed,onChange:function(){return e.handleChangeProps(e.course.id)}}),Object(h.jsx)("span",{style:e.course.completed?{fontStyle:"italic",color:"#d35e0f",opacity:.5,textDecoration:"line-through"}:null,children:e.course.title}),Object(h.jsx)("button",{onClick:function(){return e.deleteCourseProps(e.course.id)},children:"X"})]})},j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"courseList",children:this.props.courses.map((function(t){return Object(h.jsx)(p,{course:t,handleChangeProps:e.props.handleChangeProps,deleteCourseProps:e.props.deleteCourseProps},t.id)}))})}}]),n}(r.a.Component),b=j,f=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:"AS Degree in CNIT Department"}),Object(h.jsx)("p",{children:"Add or delete a course using the input box below"})]})},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e.onChange=function(t){e.setState({title:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""===e.state.title?alert("Hey, don't forget to add a course name"):(e.props.addCourseProps(e.state.title),e.setState({title:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"f-container",children:[Object(h.jsx)("input",{contenteditable:!0,className:"f-input",type:"text",placeholder:"Add Course...",value:this.state.title,onChange:this.onChange}),Object(h.jsx)("input",{type:"submit",value:"SUBMIT",className:"f-submit"})]})}}]),n}(s.Component),O=m,C=n(17),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={courses:[{id:1,title:"CNIT 103 - Hardware \u2013 3 units",completed:!1},{id:2,title:"CNIT 131 \u2013 Internet & Intro to HTML, CSS \u2013 3 units",completed:!1},{id:3,title:"CNIT 106 \u2013 Introduction to Networks \u2013 3 units ",completed:!1},{id:4,title:"CNIT 120 \u2013 Network Security \u2013 3 units"}],defaultMode:!0},e.handleChange=function(t){e.setState({courses:e.state.courses.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteCourse=function(t){e.setState({courses:Object(a.a)(e.state.courses.filter((function(e){return e.id!==t})))})},e.addCourseItem=function(t){var n={id:Object(C.a)(),title:t,completed:!1};e.setState({courses:[].concat(Object(a.a)(e.state.courses),[n])})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.defaultMode?"lightMode":"darkMode";return Object(h.jsxs)("div",{className:"container ".concat(t),children:[Object(h.jsx)("button",{className:"themeToggle",onClick:function(){return e.setState({defaultMode:!e.state.defaultMode})},children:"Switch Theme"}),Object(h.jsx)(f,{}),Object(h.jsx)(O,{addCourseProps:this.addCourseItem}),Object(h.jsx)(b,{courses:this.state.courses,handleChangeProps:this.handleChange,deleteCourseProps:this.deleteCourse})]})}}]),n}(r.a.Component),g=x;n(14);c.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d2515336.chunk.js.map