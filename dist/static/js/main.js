
function postMsg() {
	if (document.form.comment.value==null || document.form.comment.value=="") {
		alert("请填写留言。");
		return;
	} else {
		document.form.submit();
	}
}

function turn (ind) {
	console.log(ind)
	if (owo.script.page.template.module149.data.swiperIt) {
		owo.script.page.template.module149.data.swiperIt.turn(ind)
	}
}