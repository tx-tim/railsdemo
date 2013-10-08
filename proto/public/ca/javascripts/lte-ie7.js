/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-youtube' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-pinterest' : '&#xe002;',
			'icon-google-plus' : '&#xe003;',
			'icon-facebook' : '&#xe004;',
			'icon-hamburger' : '&#xe005;',
			'icon-hamburger2' : '&#xe006;',
			'icon-diamonds' : '&#xe007;',
			'icon-music' : '&#xe008;',
			'icon-camera' : '&#xe009;',
			'icon-headphones' : '&#xe00a;',
			'icon-credit' : '&#xe00b;',
			'icon-coin' : '&#xe00c;',
			'icon-cart' : '&#xe00d;',
			'icon-bookmark' : '&#xe00f;',
			'icon-heart' : '&#xe00e;',
			'icon-home' : '&#xe010;',
			'icon-close' : '&#xe011;',
			'icon-checkbox-checked' : '&#xe012;',
			'icon-checkbox-unchecked' : '&#xe013;',
			'icon-checkbox-partial' : '&#xe014;',
			'icon-undo' : '&#xe015;',
			'icon-redo' : '&#xe016;',
			'icon-forward' : '&#xe017;',
			'icon-reply' : '&#xe018;',
			'icon-box-add' : '&#xe01a;',
			'icon-location' : '&#xe019;',
			'icon-location-2' : '&#xe01b;',
			'icon-alarm' : '&#xe01c;',
			'icon-bell' : '&#xe01d;',
			'icon-spinner' : '&#xe01e;',
			'icon-user' : '&#xe01f;',
			'icon-users' : '&#xe020;',
			'icon-key' : '&#xe021;',
			'icon-pie' : '&#xe022;',
			'icon-bars' : '&#xe023;',
			'icon-home-2' : '&#xe024;',
			'icon-spinner-2' : '&#xe025;',
			'icon-print' : '&#xe026;',
			'icon-phone' : '&#xe027;',
			'icon-plus' : '&#xe028;',
			'icon-radio-checked' : '&#xe029;',
			'icon-radio-unchecked' : '&#xe02a;',
			'icon-arrow-right' : '&#xe02b;',
			'icon-arrow-down' : '&#xe02c;',
			'icon-checkmark' : '&#xe02d;',
			'icon-rocket' : '&#xe02e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};