
var room_id=[];
var room_id_a =0;
var Rooms = []
var numConstrain = 250
var numKeys = Math.ceil(numConstrain/50);

var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	flash.Lib.get_stage().frameRate = 60;
	flash.Lib.get_current().addChild(ApplicationMain.preloader = new NMEPreloader());
	ApplicationMain.preloader.onInit();
	
	var resourcePrefix = "NME_:bitmap_";
	var _g = 0;
	var _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}

	if(ApplicationMain.total != 0) {
		ApplicationMain.loaderStack = [];
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			ApplicationMain.loaderStack.push(p);
		}
		ApplicationMain.urlLoaderStack = [];
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var p1 = $it1.next();
			ApplicationMain.urlLoaderStack.push(p1);
		}
		var _g2 = 0;
		while(_g2 < 8) {
			var i = _g2++;
			ApplicationMain.nextLoader();
		}
	} else ApplicationMain.begin();
};
ApplicationMain.nextLoader = function() {
	if(ApplicationMain.loaderStack.length != 0) {
		var p = ApplicationMain.loaderStack.shift();
		var o = ApplicationMain.loaders.get(p);
		o.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
		o.load(new flash.net.URLRequest(p));
	} else if(ApplicationMain.urlLoaderStack.length != 0) {
		var p1 = ApplicationMain.urlLoaderStack.shift();
		var o1 = ApplicationMain.urlLoaders.get(p1);
		o1.addEventListener("complete",ApplicationMain.loader_onComplete);
		o1.load(new flash.net.URLRequest(p1));
	}
};
ApplicationMain.loadFile = function(p) {
	var value = new flash.display.Loader();
	ApplicationMain.loaders.set(p,value);
	ApplicationMain.total++;
};
ApplicationMain.loadBinary = function(p) {
	var o = new flash.net.URLLoader();
	o.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set(p,o);
	ApplicationMain.total++;
};
ApplicationMain.loadSound = function(p) {
	return;
	var i = p.lastIndexOf(".");
	var c = flash.media.Sound;
	var s;
	var o;
	var m = flash.Lib.mobile;
	var f = null;
	var q = "canplaythrough";
	if(i == -1) return;
	if(!c.canPlayType || !c.canPlayType(HxOverrides.substr(p,i + 1,null))) return;
	s = HxOverrides.substr(p,0,i) + ".mp3";
	if(c.library.exists(s)) return;
	ApplicationMain.total++;
	c.library.set(s,o = new Audio(p));
	f = function(_) {
		if(!m) o.removeEventListener(q,f);
		ApplicationMain.preloader.onUpdate(++ApplicationMain.completed,ApplicationMain.total);
		if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
	};
	if(m) f(null); else o.addEventListener(q,f);
};
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener("complete",ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin(); else ApplicationMain.nextLoader();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener("complete",ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(metazelda.viewer.Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.callMethod(metazelda.viewer.Main,Reflect.field(metazelda.viewer.Main,"main"),[]);
};
var flash = {};
flash.events = {};
flash.events.IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
};
flash.events.EventDispatcher = function() {
	this.eventList = new haxe.ds.StringMap();
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o;
		if(!this.eventList.exists(type)) {
			var value = o = [];
			this.eventList.set(type,value);
		} else o = this.eventList.get(type);
		o.push(listener);
	}
	,removeEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.eventList.exists(type)) {
			var r = this.eventList.get(type);
			var _g = 0;
			while(_g < r.length) {
				var o = r[_g];
				++_g;
				if(Reflect.compareMethods(o,listener)) {
					HxOverrides.remove(r,o);
					break;
				}
			}
			if(r.length == 0) this.eventList.remove(type);
		}
	}
	,hasEventListener: function(type) {
		return this.eventList.exists(type);
	}
	,dispatchEvent: function(event) {
		if(event.get_target() == null) event.set_target(this);
		var t = event.type;
		if(this.eventList.exists(t)) {
			var _g = 0;
			var _g1 = this.eventList.get(t);
			while(_g < _g1.length) {
				var o = _g1[_g];
				++_g;
				o(event);
			}
		}
		return true;
	}
	,__class__: flash.events.EventDispatcher
};
flash.events.EventWrapper = function() {
	flash.events.EventDispatcher.call(this);
	this.eventMap = new haxe.ds.ObjectMap();
};
$hxClasses["flash.events.EventWrapper"] = flash.events.EventWrapper;
flash.events.EventWrapper.__name__ = ["flash","events","EventWrapper"];
flash.events.EventWrapper.__super__ = flash.events.EventDispatcher;
flash.events.EventWrapper.prototype = $extend(flash.events.EventDispatcher.prototype,{
	addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var _g = this;
		flash.events.EventDispatcher.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
		var f;
		var wrapper = function(e) {
			if(e.get_target() == _g.component) e.set_target(_g);
			e.set_currentTarget(_g);
			listener(e);
		};
		f = wrapper;
		if(!(this.eventMap.h.__keys__[listener.__id__] != null)) this.eventMap.set(listener,f);
		this.component.addEventListener(type,f,useCapture);
	}
	,removeEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		flash.events.EventDispatcher.prototype.removeEventListener.call(this,type,listener,useCapture,priority,weak);
		if(this.eventMap.h.__keys__[listener.__id__] != null) {
			this.component.removeEventListener(type,this.eventMap.h[listener.__id__],useCapture);
			this.eventMap.remove(listener);
		}
	}
	,__class__: flash.events.EventWrapper
});
flash.display = {};
flash.display.DisplayObject = function() {
	this.y = 0;
	this.x = 0;
	this.rotation = 0;
	this.scaleY = 1;
	this.scaleX = 1;
	this.alpha = 1;
	this.visible = true;
	flash.events.EventWrapper.call(this);
	this.eventRemap = new haxe.ds.StringMap();
	if(this.component == null) this.component = flash.Lib.jsDiv();
	this.component.node = this;
	this.transform = new flash.geom.Transform(this);
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__super__ = flash.events.EventWrapper;
flash.display.DisplayObject.prototype = $extend(flash.events.EventWrapper.prototype,{
	broadcastEvent: function(e) {
		this.dispatchEvent(e);
	}
	,invalidate: function() {
	}
	,syncMtx: function() {
		var s = this.component.style;
		var v;
		var n;
		if(this._syncMtx_set != true) {
			this._syncMtx_set = true;
			v = "0% 0%";
			n = "syncMtx-origin";
			s.setProperty(n,v,null);
			s.setProperty("-o-" + n,v,null);
			s.setProperty("-ms-" + n,v,null);
			s.setProperty("-moz-" + n,v,null);
			s.setProperty("-webkit-" + n,v,null);
		}
		v = "";
		if(this.x != 0 || this.y != 0) v += "translate(" + this.x + "px, " + this.y + "px) ";
		if(this.scaleX != 1 || this.scaleY != 1) v += "scale(" + this.scaleX + ", " + this.scaleY + ") ";
		if(this.rotation != 0) v += "rotate(" + this.rotation + "deg) ";
		if(this.transform != null) {
			var m = this.transform.get_matrix();
			if(m != null && !m.isIdentity()) v += "matrix(" + m.a + ", " + m.b + ", " + m.c + ", " + m.d + ", " + m.tx + ", " + m.ty + ")" + " ";
		}
		n = "transform";
		s.setProperty(n,v,null);
		s.setProperty("-o-" + n,v,null);
		s.setProperty("-ms-" + n,v,null);
		s.setProperty("-moz-" + n,v,null);
		s.setProperty("-webkit-" + n,v,null);
	}
	,set_x: function(v) {
		if(this.x != v) {
			this.x = v;
			this.syncMtx();
		}
		return v;
	}
	,set_y: function(v) {
		if(this.y != v) {
			this.y = v;
			this.syncMtx();
		}
		return v;
	}
	,set_rotation: function(v) {
		if(this.rotation != v) {
			this.rotation = v;
			this.syncMtx();
		}
		return v;
	}
	,set_scaleX: function(v) {
		if(this.scaleX != v) {
			this.scaleX = v;
			this.syncMtx();
		}
		return v;
	}
	,set_scaleY: function(v) {
		if(this.scaleY != v) {
			this.scaleY = v;
			this.syncMtx();
		}
		return v;
	}
	,get_width: function() {
		return this.qWidth || 0;
	}
	,get_height: function() {
		return this.qHeight || 0;
	}
	,set_width: function(v) {
		return v;
	}
	,set_height: function(v) {
		return v;
	}
	,set_alpha: function(v) {
		if(v != this.alpha) this.component.style.opacity = (this.alpha = v).toFixed(4);
		return v;
	}
	,set_visible: function(v) {
		if(this.visible = v) this.component.style.display = null; else this.component.style.display = "none";
		return v;
	}
	,set_scrollRect: function(v) {
		var v1 = Std.string(this) + ".scrollRect = " + Std.string(v);
		null;
		return v;
	}
	,get_stage: function() {
		return this._stage;
	}
	,set_stage: function(v) {
		if(this._stage != v) {
			var z = this._stage != null != (v != null);
			this._stage = v;
			if(z) this.dispatchEvent(new flash.events.Event(v != null?"addedToStage":"removedFromStage"));
		}
		return v;
	}
	,getBounds: function(o) {
		var m = this.getGlobalMatrix();
		var r = new flash.geom.Rectangle(0,0,this.get_width(),this.get_height());
		if(o == null) o = this;
		if(o != this) {
			r.transform(m);
			if(o != null) {
				m = o.getGlobalMatrix();
				m.invert();
				r.transform(m);
			}
		}
		return r;
	}
	,getRect: function(o) {
		return this.getBounds(o);
	}
	,getGlobalMatrix: function(m) {
		if(m == null) m = new flash.geom.Matrix();
		var o = this;
		while(o != null) {
			if(o.x != 0 || o.y != 0) m.translate(o.x,o.y);
			if(o.scaleX != 1 || o.scaleY != 1) m.scale(o.scaleX,o.scaleY);
			if(o.rotation != 0) m.rotate(o.rotation);
			m.concat(o.transform.get_matrix());
			o = o.parent;
		}
		return m;
	}
	,globalToLocal: function(q,r) {
		if(r == null) r = new flash.geom.Point();
		var m = flash.display.DisplayObject.convMatrix;
		var u = q.x;
		var v = q.y;
		if(m == null) m = flash.display.DisplayObject.convMatrix = new flash.geom.Matrix();
		m.identity();
		m = this.getGlobalMatrix(m);
		m.invert();
		r.x = u * m.a + v * m.c + m.tx;
		r.y = u * m.b + v * m.d + m.ty;
		return r;
	}
	,localToGlobal: function(q,r) {
		if(r == null) r = new flash.geom.Point();
		var m = flash.display.DisplayObject.convMatrix;
		var u = q.x;
		var v = q.y;
		if(m == null) m = flash.display.DisplayObject.convMatrix = new flash.geom.Matrix();
		m.identity();
		m = this.getGlobalMatrix(m);
		r.x = u * m.a + v * m.c + m.tx;
		r.y = u * m.b + v * m.d + m.ty;
		return r;
	}
	,get_mouseX: function() {
		return (flash.display.DisplayObject.convPoint = this.globalToLocal(flash.Lib.get_current().get_stage().mousePos,flash.display.DisplayObject.convPoint)).x;
	}
	,get_mouseY: function() {
		return (flash.display.DisplayObject.convPoint = this.globalToLocal(flash.Lib.get_current().get_stage().mousePos,flash.display.DisplayObject.convPoint)).y;
	}
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var _g = this;
		flash.events.EventWrapper.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
		if(flash.display.DisplayObject.remapTouch.exists(type)) {
			var f = function(e) {
				var n = new flash.events.MouseEvent(type,e.bubbles,e.cancelable,0,0,_g,e.ctrlKey,e.altKey,e.shiftKey,false);
				var l = e.targetTouches;
				if(l.length > 0) {
					n.pageX = l[0].pageX;
					n.pageY = l[0].pageY;
				} else {
					n.pageX = _g.get_stage().mousePos.x;
					n.pageY = _g.get_stage().mousePos.y;
				}
				_g.dispatchEvent(n);
			};
			flash.events.EventWrapper.prototype.addEventListener.call(this,flash.display.DisplayObject.remapTouch.get(type),f,useCapture,priority,weak);
		}
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,__class__: flash.display.DisplayObject
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.tabIndex = 0;
	this.mouseEnabled = this.doubleClickEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	giveFocus: function() {
		this.component.focus();
	}
	,__class__: flash.display.InteractiveObject
});
flash.display.DisplayObjectContainer = function() {
	flash.display.InteractiveObject.call(this);
	this.children = [];
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	get_numChildren: function() {
		return this.children.length;
	}
	,addChild: function(o) {
		if(o.parent != null) o.parent.removeChild(o);
		o.parent = this;
		o.set_stage(this.get_stage());
		this.children.push(o);
		this.component.appendChild(o.component);
		var e = new flash.events.Event("added");
		o.dispatchEvent(e);
		this.dispatchEvent(e);
		return o;
	}
	,removeChild: function(o) {
		o.parent = null;
		o.set_stage(null);
		HxOverrides.remove(this.children,o);
		this.component.removeChild(o.component);
		var e = new flash.events.Event("removed");
		o.dispatchEvent(e);
		this.dispatchEvent(e);
		return o;
	}
	,addChildAt: function(o,v) {
		if(v < this.children.length) {
			if(o.parent != null) o.parent.removeChild(o);
			o.parent = this;
			o.set_stage(this.get_stage());
			this.component.insertBefore(o.component,this.children[v].component);
			this.children.splice(v,0,o);
			return o;
		} else return this.addChild(o);
	}
	,removeChildAt: function(v) {
		return this.removeChild(this.children[v]);
	}
	,getChildAt: function(v) {
		return this.children[v];
	}
	,getChildIndex: function(v) {
		var i = -1;
		var l = this.children.length;
		while(++i < l) if(this.children[i] == v) return i;
		return -1;
	}
	,contains: function(v) {
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			if(o == v) return true;
		}
		return false;
	}
	,broadcastEvent: function(e) {
		this.dispatchEvent(e);
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.broadcastEvent(e);
		}
	}
	,set_stage: function(v) {
		flash.display.InteractiveObject.prototype.set_stage.call(this,v);
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.set_stage(v);
		}
		return v;
	}
	,__class__: flash.display.DisplayObjectContainer
});
flash.display.IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
};
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_graphics: function() {
		if(this._graphics == null) {
			var o = new flash.display.Graphics();
			var q = o.component;
			o.set_displayObject(this);
			if(this.children.length == 0) this.component.appendChild(q); else this.component.insertBefore(q,this.children[0].component);
			this._graphics = o;
		}
		return this._graphics;
	}
	,set_stage: function(v) {
		var z = this.get_stage() == null && v != null;
		var r = flash.display.DisplayObjectContainer.prototype.set_stage.call(this,v);
		if(z && this._graphics != null) this._graphics.invalidate();
		return r;
	}
	,set_useHandCursor: function(o) {
		if(o) this.component.style.cursor = "pointer"; else this.component.style.cursor = null;
		return this.useHandCursor = o;
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		this.get_graphics().drawToSurface(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing);
	}
	,__class__: flash.display.Sprite
});
var metazelda = {};
metazelda.viewer = {};
metazelda.viewer.Main = function() {
	flash.display.Sprite.call(this);
	this.addEventListener("addedToStage",$bind(this,this.added));
};
$hxClasses["metazelda.viewer.Main"] = metazelda.viewer.Main;
metazelda.viewer.Main.__name__ = ["metazelda","viewer","Main"];
metazelda.viewer.Main.main = function() {
	flash.Lib.get_current().get_stage().align = flash.display.StageAlign.TOP_LEFT;
	flash.Lib.get_current().get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
	flash.Lib.get_current().addChild(new metazelda.viewer.Main());
};
metazelda.viewer.Main.__super__ = flash.display.Sprite;
metazelda.viewer.Main.prototype = $extend(flash.display.Sprite.prototype,{
	regenerate: function() {
		
		var seed = Std.random(2347);
		var constraints = null;

		if(constraints == null) constraints = new metazelda.constraints.CountConstraints(numConstrain,numKeys,0);
		constraints.setMaxSwitches(0);

		this.dungeonGen = new metazelda.generators.LinearDungeonGenerator(seed,constraints);
		this.dungeonGen.generate();

		if(this.dungeonView != null) {
			this.removeChild(this.dungeonView);
			this.dungeonView = null;
		}
	this.dungeonView = new metazelda.viewer.DungeonView();
		this.addChild(this.dungeonView);
		this.dungeonView.draw(this.dungeonGen.getDungeon());
		this.get_stage().set_focus(this.get_stage());
		//this.seedTextField.set_text("Dungeon seed: " + this.dungeonGen.getSeed() + " | Press <R> to regenerate.");
	}
	,getSpaceConstraints: function(filename) {
		if(filename == null) filename = "turtle.png";
		var constraints = null;
		try {
			var spaceMap = new metazelda.constraints.SpaceMap();
			var img = openfl.Assets.getBitmapData("img/spacemaps/" + filename);
			var _g1 = 0;
			var _g = img.component.width;
			while(_g1 < _g) {
				var x = _g1++;
				var _g3 = 0;
				var _g2 = img.component.height;
				while(_g3 < _g2) {
					var y = _g3++;
					if((img.getPixel(x,y) & 16777215) != 0) spaceMap.set(new metazelda.util.Coords(x,y),true);
				}
			}
			constraints = new metazelda.constraints.SpaceConstraints(spaceMap);
		} catch( e ) {
			console.log("SpaceConstraints creation failed");
		}
		return constraints;
	}
	,resize: function(e) {
		if(!this.inited) this.init();
		this.removeChild(this.dungeonView);
		this.dungeonView = new metazelda.viewer.DungeonView();
		this.addChild(this.dungeonView);
		this.dungeonView.draw(this.dungeonGen.getDungeon());
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		this.seedTextField = new flash.text.TextField();
		this.seedTextField.set_width(600);
		this.seedTextField.set_text("");
		this.seedTextField.set_x(5);
		this.seedTextField.set_y(5);
		this.addChild(this.seedTextField);
		this.regenerate();
	}
	,onKeyDown: function(e) {
		//if(e.keyCode == 82) this.regenerate();
	}
	,added: function(e) {
		this.removeEventListener("addedToStage",$bind(this,this.added));
		this.get_stage().addEventListener("resize",$bind(this,this.resize));
		this.get_stage().addEventListener("keydown",$bind(this,this.onKeyDown));
		this.init();
	}
	,__class__: metazelda.viewer.Main
});
var DocumentClass = function() {
	metazelda.viewer.Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = metazelda.viewer.Main;
DocumentClass.prototype = $extend(metazelda.viewer.Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.list = function(it) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 600;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getWidth: function() {
		var width = 800;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event("complete"));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
var de = {};
de.polygonal = {};
de.polygonal.Printf = function() { };
$hxClasses["de.polygonal.Printf"] = de.polygonal.Printf;
de.polygonal.Printf.__name__ = ["de","polygonal","Printf"];
de.polygonal.Printf.init = function() {
	de.polygonal.Printf.dataTypeMap = de.polygonal.Printf.makeDataTypeMap();
	de.polygonal.Printf.formatIntFuncHash = new haxe.ds.IntMap();
	de.polygonal.Printf.formatIntFuncHash.set(1,de.polygonal.Printf.formatSignedDecimal);
	de.polygonal.Printf.formatIntFuncHash.set(2,de.polygonal.Printf.formatUnsignedDecimal);
	de.polygonal.Printf.formatIntFuncHash.set(0,de.polygonal.Printf.formatCharacter);
	de.polygonal.Printf.formatIntFuncHash.set(4,de.polygonal.Printf.formatHexadecimal);
	de.polygonal.Printf.formatIntFuncHash.set(3,de.polygonal.Printf.formatOctal);
	de.polygonal.Printf.formatIntFuncHash.set(5,de.polygonal.Printf.formatBinary);
	de.polygonal.Printf.formatFloatFuncHash = new haxe.ds.IntMap();
	de.polygonal.Printf.formatFloatFuncHash.set(0,de.polygonal.Printf.formatNormalFloat);
	de.polygonal.Printf.formatFloatFuncHash.set(1,de.polygonal.Printf.formatScientific);
	de.polygonal.Printf.formatFloatFuncHash.set(2,de.polygonal.Printf.formatNaturalFloat);
	de.polygonal.Printf.formatStringFuncHash = new haxe.ds.IntMap();
	de.polygonal.Printf.formatStringFuncHash.set(2,de.polygonal.Printf.formatString);
};
de.polygonal.Printf.makeDataTypeMap = function() {
	var hash = new haxe.ds.IntMap();
	hash.set(105,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ISignedDecimal));
	hash.set(100,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ISignedDecimal));
	hash.set(117,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IUnsignedDecimal));
	hash.set(99,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.ICharacter));
	hash.set(0,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IHex));
	hash.set(88,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IHex));
	hash.set(111,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IOctal));
	hash.set(98,de.polygonal._Printf.FormatDataType.FmtInteger(de.polygonal._Printf.IntegerType.IBin));
	hash.set(102,de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNormal));
	hash.set(101,de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FScientific));
	hash.set(69,de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FScientific));
	hash.set(103,de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNatural));
	hash.set(71,de.polygonal._Printf.FormatDataType.FmtFloat(de.polygonal._Printf.FloatType.FNatural));
	hash.set(115,de.polygonal._Printf.FormatDataType.FmtString);
	hash.set(10,de.polygonal._Printf.FormatDataType.FmtPointer);
	hash.set(110,de.polygonal._Printf.FormatDataType.FmtNothing);
	return hash;
};
de.polygonal.Printf.format = function(fmt,args) {
	if(!de.polygonal.Printf._initialized) {
		de.polygonal.Printf._initialized = true;
		de.polygonal.Printf.init();
	}
	var _g1 = 0;
	var _g = args.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(args[i] == null) args[i] = "null";
	}
	var output = "";
	var argIndex = 0;
	var tokens = de.polygonal.Printf.tokenize(fmt);
	var _g2 = 0;
	while(_g2 < tokens.length) {
		var token = tokens[_g2];
		++_g2;
		switch(token[1]) {
		case 3:
			throw "invalid format specifier";
			break;
		case 0:
			var str = token[2];
			output += str;
			break;
		case 2:
			var name = token[2];
			if(!Object.prototype.hasOwnProperty.call(args[0],name)) throw "no field named " + name;
			output += Std.string(Reflect.field(args[0],name));
			break;
		case 1:
			var tagArgs = token[3];
			var type = token[2];
			if(tagArgs.width != null) tagArgs.width = tagArgs.width; else tagArgs.width = js.Boot.__cast(args[argIndex++] , Int);
			if(tagArgs.precision != null) tagArgs.precision = tagArgs.precision; else tagArgs.precision = js.Boot.__cast(args[argIndex++] , Int);
			var value = args[argIndex++];
			var formatFunction;
			switch(type[1]) {
			case 1:
				var floatType = type[2];
				formatFunction = de.polygonal.Printf.formatFloatFuncHash.get(floatType[1]);
				break;
			case 0:
				var integerType = type[2];
				formatFunction = de.polygonal.Printf.formatIntFuncHash.get(integerType[1]);
				break;
			case 2:
				formatFunction = de.polygonal.Printf.formatStringFuncHash.get(2);
				break;
			case 3:
				throw "specifier 'p' is not supported";
				break;
			case 4:
				throw "specifier 'n' is not supported";
				break;
			}
			output += formatFunction(value,tagArgs);
			break;
		}
	}
	return output;
};
de.polygonal.Printf.tokenize = function(fmt) {
	var length = fmt.length;
	var lastStr = new StringBuf();
	var i = 0;
	var c = 0;
	var tokens = new Array();
	while(i < length) {
		var c1 = de.polygonal.Printf.codeAt(fmt,i++);
		if(c1 == 37) {
			c1 = de.polygonal.Printf.codeAt(fmt,i++);
			if(c1 == 37) lastStr.b += String.fromCharCode(c1); else {
				if(lastStr.b.length > 0) {
					tokens.push(de.polygonal._Printf.FormatToken.BareString(lastStr.b));
					lastStr = new StringBuf();
				}
				var token;
				if(c1 == 40) {
					var endPos = fmt.indexOf(")",i);
					if(endPos == -1) token = de.polygonal._Printf.FormatToken.Unknown("named param",i); else {
						var paramName = HxOverrides.substr(fmt,i,endPos - i);
						i = endPos + 1;
						token = de.polygonal._Printf.FormatToken.Property(paramName);
					}
				} else {
					var params = { flags : 0, pos : -1, width : -1, precision : -1};
					while(c1 == 45 || c1 == 43 || c1 == 35 || c1 == 48 || c1 == 32) {
						if(c1 == 45) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Minus[1]; else if(c1 == 43) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Plus[1]; else if(c1 == 35) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Sharp[1]; else if(c1 == 48) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Zero[1]; else if(c1 == 32) params.flags |= 1 << de.polygonal._Printf.FormatFlags.Space[1];
						c1 = de.polygonal.Printf.codeAt(fmt,i++);
					}
					if((params.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0 && (params.flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) params.flags &= 268435455 - (1 << de.polygonal._Printf.FormatFlags.Zero[1]);
					if((params.flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0 && (params.flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) params.flags &= 268435455 - (1 << de.polygonal._Printf.FormatFlags.Space[1]);
					if(c1 == 42) {
						params.width = null;
						c1 = de.polygonal.Printf.codeAt(fmt,i++);
					} else if(c1 >= 48 && c1 <= 57) {
						params.width = 0;
						while(c1 >= 48 && c1 <= 57) {
							params.width = c1 - 48 + params.width * 10;
							c1 = de.polygonal.Printf.codeAt(fmt,i++);
						}
						if(c1 == 36) {
							params.pos = params.width - 1;
							params.width = -1;
							c1 = de.polygonal.Printf.codeAt(fmt,i++);
							if(c1 == 42) {
								params.width = null;
								c1 = de.polygonal.Printf.codeAt(fmt,i++);
							} else if(c1 >= 48 && c1 <= 57) {
								params.width = 0;
								while(c1 >= 48 && c1 <= 57) {
									params.width = c1 - 48 + params.width * 10;
									c1 = de.polygonal.Printf.codeAt(fmt,i++);
								}
							}
						}
					}
					if(c1 == 46) {
						c1 = de.polygonal.Printf.codeAt(fmt,i++);
						if(c1 == 42) {
							params.precision = null;
							c1 = de.polygonal.Printf.codeAt(fmt,i++);
						} else if(c1 >= 48 && c1 <= 57) {
							params.precision = 0;
							while(c1 >= 48 && c1 <= 57) {
								params.precision = c1 - 48 + params.precision * 10;
								c1 = de.polygonal.Printf.codeAt(fmt,i++);
							}
						} else params.precision = 0;
					}
					while(c1 == 104 || c1 == 18 || c1 == 76) {
						switch(c1) {
						case 104:
							params.flags |= 1 << de.polygonal._Printf.FormatFlags.LengthH[1];
							break;
						case 18:
							params.flags |= 1 << de.polygonal._Printf.FormatFlags.Lengthl[1];
							break;
						case 76:
							params.flags |= 1 << de.polygonal._Printf.FormatFlags.LengthL[1];
							break;
						}
						c1 = de.polygonal.Printf.codeAt(fmt,i++);
					}
					if(c1 == 69 || c1 == 71 || c1 == 88) params.flags |= 1 << de.polygonal._Printf.FormatFlags.UpperCase[1];
					var type = de.polygonal.Printf.dataTypeMap.get(c1);
					if(type == null) token = de.polygonal._Printf.FormatToken.Unknown(String.fromCharCode(c1),i); else token = de.polygonal._Printf.FormatToken.Tag(type,params);
				}
				tokens.push(token);
			}
		} else lastStr.b += String.fromCharCode(c1);
	}
	if(lastStr.b.length > 0) tokens.push(de.polygonal._Printf.FormatToken.BareString(lastStr.b));
	return tokens;
};
de.polygonal.Printf.formatBinary = function(value,args) {
	var output = "";
	var flags = args.flags;
	var precision = args.precision;
	var width = args.width;
	if(precision == -1) precision = 1;
	if(value != 0) {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
		var i = value;
		do {
			output = ((i & 1) > 0?"1":"0") + output;
			i >>>= 1;
		} while(i > 0);
		if(precision > 1) {
			if(precision > output.length) output = de.polygonal.Printf.lpad(output,"0",precision);
			if((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output = "b" + output;
		}
	}
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
		if(width > output.length) return de.polygonal.Printf.rpad(output," ",width); else return output;
	} else if(width > output.length) return de.polygonal.Printf.lpad(output,(flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0?"0":" ",width); else return output;
};
de.polygonal.Printf.formatOctal = function(value,args) {
	var output = "";
	var flags = args.flags;
	var precision = args.precision;
	var width = args.width;
	if(precision == -1) precision = 1;
	if(value != 0) {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
		output = de.polygonal.Printf.toOct(value);
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output = "0" + output;
		if(precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output,"0",precision);
	}
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
		if(width > output.length) return de.polygonal.Printf.rpad(output," ",width); else return output;
	} else if(width > output.length) return de.polygonal.Printf.lpad(output,(flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0?"0":" ",width); else return output;
};
de.polygonal.Printf.formatHexadecimal = function(value,args) {
	var output = "";
	var flags = args.flags;
	var precision = args.precision;
	var width = args.width;
	if(precision == -1) precision = 1;
	if(value != 0) {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
		output = de.polygonal.Printf.toHex(value);
		if(precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output,"0",precision);
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0 && value != 0) output = "0x" + output;
		if((flags & 1 << de.polygonal._Printf.FormatFlags.UpperCase[1]) != 0) output = output.toUpperCase(); else output = output.toLowerCase();
	}
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) {
		if(width > output.length) return de.polygonal.Printf.rpad(output," ",width); else return output;
	} else if(width > output.length) return de.polygonal.Printf.lpad(output,(flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0?"0":" ",width); else return output;
};
de.polygonal.Printf.formatUnsignedDecimal = function(value,args) {
	var output;
	var precision = args.precision;
	if(value >= 0) output = de.polygonal.Printf.formatSignedDecimal(value,args); else {
		var x = new haxe.Int64(0,value);
		output = x.toString();
		if(precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output,"0",precision);
		output = de.polygonal.Printf.padNumber(output,value,args.flags,args.width);
	}
	return output;
};
de.polygonal.Printf.formatNaturalFloat = function(value,args) {
	args.precision = 0;
	var formatedFloat = de.polygonal.Printf.formatNormalFloat(value,args);
	var formatedScientific = de.polygonal.Printf.formatScientific(value,args);
	if((args.flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) {
		if(formatedFloat.indexOf(".") != -1) {
			var pos = formatedFloat.length - 1;
			while(formatedFloat.charCodeAt(pos) == 48) pos--;
			formatedFloat = HxOverrides.substr(formatedFloat,0,pos);
		}
	}
	if(formatedFloat.length <= formatedScientific.length) return formatedFloat; else return formatedScientific;
};
de.polygonal.Printf.formatScientific = function(value,args) {
	var output = "";
	var flags = args.flags;
	var precision = args.precision;
	if(precision == -1) precision = 6;
	var sign;
	var exponent;
	if(value == 0) {
		sign = 0;
		exponent = 0;
		output += "0";
		if(precision > 0) {
			output += ".";
			var _g = 0;
			while(_g < precision) {
				var i = _g++;
				output += "0";
			}
		}
	} else {
		if(value > 0.) sign = 1; else if(value < 0.) sign = -1; else sign = 0;
		value = Math.abs(value);
		exponent = Math.floor(Math.log(value) / 2.302585092994046);
		value = value / Math.pow(10,exponent);
		var p = Math.pow(0.1,precision);
		value = Math.round(value / p) * p;
	}
	if(sign < 0) output += "-"; else if((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) output += "+"; else output += "";
	if(value != 0) output += de.polygonal.Printf.rpad((function($this) {
		var $r;
		var _this = de.polygonal.Printf.str(value);
		$r = HxOverrides.substr(_this,0,precision + 2);
		return $r;
	}(this)),"0",precision + 2);
	if((flags & 1 << de.polygonal._Printf.FormatFlags.UpperCase[1]) != 0) output += "E"; else output += "e";
	if(exponent >= 0) output += "+"; else output += "-";
	if(exponent < 10) output += "00"; else if(exponent < 100) output += "0";
	output += de.polygonal.Printf.str(de.polygonal.Printf.iabs(exponent));
	return output;
};
de.polygonal.Printf.formatSignedDecimal = function(value,args) {
	var output;
	var flags = args.flags;
	var precision = args.precision;
	var width = args.width;
	if(precision == 0 && value == 0) output = ""; else {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.LengthH[1]) != 0) value &= 65535;
		output = de.polygonal.Printf.str(de.polygonal.Printf.iabs(value));
		if(precision > 1 && output.length < precision) output = de.polygonal.Printf.lpad(output,"0",precision);
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) output = de.polygonal.Printf.lpad(output,"0",value < 0?width - 1:width);
		if(value < 0) output = "-" + output;
	}
	if(value >= 0) {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0) output = "+" + output; else if((flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0) output = " " + output;
	}
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output," ",args.width); else output = de.polygonal.Printf.lpad(output," ",args.width);
	return output;
};
de.polygonal.Printf.formatString = function(x,args) {
	var output = x;
	var precision = args.precision;
	var width = args.width;
	if(precision > 0) output = HxOverrides.substr(x,0,precision);
	var k = output.length;
	if(width > 0 && k < width) {
		if((args.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output," ",width); else output = de.polygonal.Printf.lpad(output," ",width);
	}
	return output;
};
de.polygonal.Printf.formatNormalFloat = function(value,args) {
	var output;
	var flags = args.flags;
	var precision = args.precision;
	var width = args.width;
	if(precision == -1) precision = 6;
	if(precision == 0) {
		output = de.polygonal.Printf.str(de.polygonal.Printf.iabs(Math.round(value)));
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Sharp[1]) != 0) output += ".";
	} else {
		value = de.polygonal.Printf.roundTo(value,Math.pow(.1,precision));
		var decimalPlaces = precision;
		if(Math.isNaN(value)) output = "NaN"; else {
			var t = Std["int"](Math.pow(10,decimalPlaces));
			output = de.polygonal.Printf.str((value * t | 0) / t);
			var i = output.indexOf(".");
			if(i != -1) {
				var _g = HxOverrides.substr(output,i + 1,null).length;
				while(_g < decimalPlaces) {
					var i1 = _g++;
					output += "0";
				}
			} else {
				output += ".";
				var _g1 = 0;
				while(_g1 < decimalPlaces) {
					var i2 = _g1++;
					output += "0";
				}
			}
		}
	}
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Plus[1]) != 0 && value >= 0) output = "+" + output; else if((flags & 1 << de.polygonal._Printf.FormatFlags.Space[1]) != 0 && value >= 0) output = " " + output;
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) output = de.polygonal.Printf.lpad(output,"0",value < 0?width - 1:width);
	if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output," ",width); else output = de.polygonal.Printf.lpad(output," ",width);
	return output;
};
de.polygonal.Printf.formatCharacter = function(x,args) {
	var output = String.fromCharCode(x);
	if(args.width > 1) {
		if((args.flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) output = de.polygonal.Printf.rpad(output," ",args.width); else output = de.polygonal.Printf.lpad(output," ",args.width);
	}
	return output;
};
de.polygonal.Printf.padNumber = function(x,n,flags,width) {
	var k = x.length;
	if(width > 0 && k < width) {
		if((flags & 1 << de.polygonal._Printf.FormatFlags.Minus[1]) != 0) x = de.polygonal.Printf.rpad(x," ",width); else if(n >= 0) x = de.polygonal.Printf.lpad(x,(flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0?"0":" ",width); else if((flags & 1 << de.polygonal._Printf.FormatFlags.Zero[1]) != 0) x = "-" + de.polygonal.Printf.lpad(HxOverrides.substr(x,1,null),"0",width); else x = de.polygonal.Printf.lpad(x," ",width);
	}
	return x;
};
de.polygonal.Printf.lpad = function(s,c,l) {
	if(c.length <= 0) throw "c.length <= 0";
	while(s.length < l) s = c + s;
	return s;
};
de.polygonal.Printf.rpad = function(s,c,l) {
	if(c.length <= 0) throw "c.length <= 0";
	while(s.length < l) s = s + c;
	return s;
};
de.polygonal.Printf.toHex = function(x) {
	var s = "";
	var hexChars = "003456789ABCDEF";
	do {
		s = hexChars.charAt(x & 15) + s;
		x >>>= 4;
	} while(x > 0);
	return s;
};
de.polygonal.Printf.toOct = function(x) {
	var s = "";
	var t = x;
	do {
		s = (t & 7) + s;
		t >>>= 3;
	} while(t > 0);
	return s;
};
de.polygonal.Printf.iabs = function(x) {
	return Std["int"](Math.abs(x));
};
de.polygonal.Printf.str = function(x) {
	return Std.string(x);
};
de.polygonal.Printf.codeAt = function(x,i) {
	return x.charCodeAt(i);
};
de.polygonal.Printf.isDigit = function(x) {
	return x >= 48 && x <= 57;
};
de.polygonal.Printf.roundTo = function(x,y) {
	return Math.round(x / y) * y;
};
de.polygonal._Printf = {};
de.polygonal._Printf.FormatFlags = $hxClasses["de.polygonal._Printf.FormatFlags"] = { __ename__ : true, __constructs__ : ["Minus","Plus","Space","Sharp","Zero","LengthH","LengthL","Lengthl","UpperCase"] };
de.polygonal._Printf.FormatFlags.Minus = ["Minus",0];
de.polygonal._Printf.FormatFlags.Minus.toString = $estr;
de.polygonal._Printf.FormatFlags.Minus.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.Plus = ["Plus",1];
de.polygonal._Printf.FormatFlags.Plus.toString = $estr;
de.polygonal._Printf.FormatFlags.Plus.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.Space = ["Space",2];
de.polygonal._Printf.FormatFlags.Space.toString = $estr;
de.polygonal._Printf.FormatFlags.Space.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.Sharp = ["Sharp",3];
de.polygonal._Printf.FormatFlags.Sharp.toString = $estr;
de.polygonal._Printf.FormatFlags.Sharp.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.Zero = ["Zero",4];
de.polygonal._Printf.FormatFlags.Zero.toString = $estr;
de.polygonal._Printf.FormatFlags.Zero.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.LengthH = ["LengthH",5];
de.polygonal._Printf.FormatFlags.LengthH.toString = $estr;
de.polygonal._Printf.FormatFlags.LengthH.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.LengthL = ["LengthL",6];
de.polygonal._Printf.FormatFlags.LengthL.toString = $estr;
de.polygonal._Printf.FormatFlags.LengthL.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.Lengthl = ["Lengthl",7];
de.polygonal._Printf.FormatFlags.Lengthl.toString = $estr;
de.polygonal._Printf.FormatFlags.Lengthl.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatFlags.UpperCase = ["UpperCase",8];
de.polygonal._Printf.FormatFlags.UpperCase.toString = $estr;
de.polygonal._Printf.FormatFlags.UpperCase.__enum__ = de.polygonal._Printf.FormatFlags;
de.polygonal._Printf.FormatToken = $hxClasses["de.polygonal._Printf.FormatToken"] = { __ename__ : true, __constructs__ : ["BareString","Tag","Property","Unknown"] };
de.polygonal._Printf.FormatToken.BareString = function(str) { var $x = ["BareString",0,str]; $x.__enum__ = de.polygonal._Printf.FormatToken; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatToken.Tag = function(type,args) { var $x = ["Tag",1,type,args]; $x.__enum__ = de.polygonal._Printf.FormatToken; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatToken.Property = function(name) { var $x = ["Property",2,name]; $x.__enum__ = de.polygonal._Printf.FormatToken; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatToken.Unknown = function(str,pos) { var $x = ["Unknown",3,str,pos]; $x.__enum__ = de.polygonal._Printf.FormatToken; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatDataType = $hxClasses["de.polygonal._Printf.FormatDataType"] = { __ename__ : true, __constructs__ : ["FmtInteger","FmtFloat","FmtString","FmtPointer","FmtNothing"] };
de.polygonal._Printf.FormatDataType.FmtInteger = function(integerType) { var $x = ["FmtInteger",0,integerType]; $x.__enum__ = de.polygonal._Printf.FormatDataType; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatDataType.FmtFloat = function(floatType) { var $x = ["FmtFloat",1,floatType]; $x.__enum__ = de.polygonal._Printf.FormatDataType; $x.toString = $estr; return $x; };
de.polygonal._Printf.FormatDataType.FmtString = ["FmtString",2];
de.polygonal._Printf.FormatDataType.FmtString.toString = $estr;
de.polygonal._Printf.FormatDataType.FmtString.__enum__ = de.polygonal._Printf.FormatDataType;
de.polygonal._Printf.FormatDataType.FmtPointer = ["FmtPointer",3];
de.polygonal._Printf.FormatDataType.FmtPointer.toString = $estr;
de.polygonal._Printf.FormatDataType.FmtPointer.__enum__ = de.polygonal._Printf.FormatDataType;
de.polygonal._Printf.FormatDataType.FmtNothing = ["FmtNothing",4];
de.polygonal._Printf.FormatDataType.FmtNothing.toString = $estr;
de.polygonal._Printf.FormatDataType.FmtNothing.__enum__ = de.polygonal._Printf.FormatDataType;
de.polygonal._Printf.IntegerType = $hxClasses["de.polygonal._Printf.IntegerType"] = { __ename__ : true, __constructs__ : ["ICharacter","ISignedDecimal","IUnsignedDecimal","IOctal","IHex","IBin"] };
de.polygonal._Printf.IntegerType.ICharacter = ["ICharacter",0];
de.polygonal._Printf.IntegerType.ICharacter.toString = $estr;
de.polygonal._Printf.IntegerType.ICharacter.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.IntegerType.ISignedDecimal = ["ISignedDecimal",1];
de.polygonal._Printf.IntegerType.ISignedDecimal.toString = $estr;
de.polygonal._Printf.IntegerType.ISignedDecimal.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.IntegerType.IUnsignedDecimal = ["IUnsignedDecimal",2];
de.polygonal._Printf.IntegerType.IUnsignedDecimal.toString = $estr;
de.polygonal._Printf.IntegerType.IUnsignedDecimal.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.IntegerType.IOctal = ["IOctal",3];
de.polygonal._Printf.IntegerType.IOctal.toString = $estr;
de.polygonal._Printf.IntegerType.IOctal.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.IntegerType.IHex = ["IHex",4];
de.polygonal._Printf.IntegerType.IHex.toString = $estr;
de.polygonal._Printf.IntegerType.IHex.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.IntegerType.IBin = ["IBin",5];
de.polygonal._Printf.IntegerType.IBin.toString = $estr;
de.polygonal._Printf.IntegerType.IBin.__enum__ = de.polygonal._Printf.IntegerType;
de.polygonal._Printf.FloatType = $hxClasses["de.polygonal._Printf.FloatType"] = { __ename__ : true, __constructs__ : ["FNormal","FScientific","FNatural"] };
de.polygonal._Printf.FloatType.FNormal = ["FNormal",0];
de.polygonal._Printf.FloatType.FNormal.toString = $estr;
de.polygonal._Printf.FloatType.FNormal.__enum__ = de.polygonal._Printf.FloatType;
de.polygonal._Printf.FloatType.FScientific = ["FScientific",1];
de.polygonal._Printf.FloatType.FScientific.toString = $estr;
de.polygonal._Printf.FloatType.FScientific.__enum__ = de.polygonal._Printf.FloatType;
de.polygonal._Printf.FloatType.FNatural = ["FNatural",2];
de.polygonal._Printf.FloatType.FNatural.toString = $estr;
de.polygonal._Printf.FloatType.FNatural.__enum__ = de.polygonal._Printf.FloatType;
de.polygonal.ds = {};
de.polygonal.ds.ArrayUtil = function() { };
$hxClasses["de.polygonal.ds.ArrayUtil"] = de.polygonal.ds.ArrayUtil;
de.polygonal.ds.ArrayUtil.__name__ = ["de","polygonal","ds","ArrayUtil"];
de.polygonal.ds.ArrayUtil.alloc = function(x) {
	var a;
	a = new Array(x);
	return a;
};
de.polygonal.ds.ArrayUtil.shrink = function(a,x) {
	if(a.length > x) a.length = x;
	return a;
};
de.polygonal.ds.ArrayUtil.copy = function(src,dst,min,max) {
	if(max == null) max = -1;
	if(min == null) min = 0;
	if(max == -1) max = src.length;
	var j = 0;
	var _g = min;
	while(_g < max) {
		var i = _g++;
		dst[j++] = src[i];
	}
	return dst;
};
de.polygonal.ds.ArrayUtil.fill = function(dst,x,k) {
	if(k == null) k = -1;
	if(k == -1) k = dst.length;
	var _g = 0;
	while(_g < k) {
		var i = _g++;
		dst[i] = x;
	}
};
de.polygonal.ds.ArrayUtil.assign = function(dst,C,args,k) {
	if(k == null) k = -1;
	if(k == -1) k = dst.length;
	if(args == null) args = [];
	var _g = 0;
	while(_g < k) {
		var i = _g++;
		dst[i] = Type.createInstance(C,args);
	}
};
de.polygonal.ds.ArrayUtil.memmove = function(a,destination,source,n) {
	if(source == destination) return; else if(source <= destination) {
		var i = source + n;
		var j = destination + n;
		var _g = 0;
		while(_g < n) {
			var k = _g++;
			i--;
			j--;
			a[j] = a[i];
		}
	} else {
		var i1 = source;
		var j1 = destination;
		var _g1 = 0;
		while(_g1 < n) {
			var k1 = _g1++;
			a[j1] = a[i1];
			i1++;
			j1++;
		}
	}
};
de.polygonal.ds.ArrayUtil.bsearchComparator = function(a,x,min,max,comparator) {
	var l = min;
	var m;
	var h = max + 1;
	while(l < h) {
		m = l + (h - l >> 1);
		if(comparator(a[m],x) < 0) l = m + 1; else h = m;
	}
	if(l <= max && comparator(a[l],x) == 0) return l; else return ~l;
};
de.polygonal.ds.ArrayUtil.bsearchInt = function(a,x,min,max) {
	var l = min;
	var m;
	var h = max + 1;
	while(l < h) {
		m = l + (h - l >> 1);
		if(a[m] < x) l = m + 1; else h = m;
	}
	if(l <= max && a[l] == x) return l; else return ~l;
};
de.polygonal.ds.ArrayUtil.bsearchFloat = function(a,x,min,max) {
	var l = min;
	var m;
	var h = max + 1;
	while(l < h) {
		m = l + (h - l >> 1);
		if(a[m] < x) l = m + 1; else h = m;
	}
	if(l <= max && a[l] == x) return l; else return ~l;
};
de.polygonal.ds.ArrayUtil.shuffle = function(a,rval) {
	var s = a.length;
	if(rval == null) {
		var m = Math;
		while(--s > 1) {
			var i = Std["int"](m.random() * s);
			var t = a[s];
			a[s] = a[i];
			a[i] = t;
		}
	} else {
		var j = 0;
		while(--s > 1) {
			var i1 = Std["int"](rval[j++] * s);
			var t1 = a[s];
			a[s] = a[i1];
			a[i1] = t1;
		}
	}
};
de.polygonal.ds.ArrayUtil.sortRange = function(a,compare,useInsertionSort,first,count) {
	var k = a.length;
	if(k > 1) {
		if(useInsertionSort) de.polygonal.ds.ArrayUtil._insertionSort(a,first,count,compare); else de.polygonal.ds.ArrayUtil._quickSort(a,first,count,compare);
	}
};
de.polygonal.ds.ArrayUtil.quickPerm = function(n) {
	var results = [];
	var a = [];
	var p = [];
	var i;
	var j;
	var tmp;
	var _g = 0;
	while(_g < n) {
		var i1 = _g++;
		a[i1] = i1 + 1;
		p[i1] = 0;
	}
	results.push(a.slice());
	i = 1;
	while(i < n) if(p[i] < i) {
		j = i % 2 * p[i];
		tmp = a[j];
		a[j] = a[i];
		a[i] = tmp;
		results.push(a.slice());
		p[i]++;
		i = 1;
	} else {
		p[i] = 0;
		i++;
	}
	return results;
};
de.polygonal.ds.ArrayUtil.equals = function(a,b) {
	if(a.length != b.length) return false;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a[i] != b[i]) return false;
	}
	return true;
};
de.polygonal.ds.ArrayUtil.split = function(a,n,k) {
	var output = new Array();
	var b = null;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		if(i % k == 0) output[i / k | 0] = b = [];
		b.push(a[i]);
	}
	return output;
};
de.polygonal.ds.ArrayUtil._insertionSort = function(a,first,k,cmp) {
	var _g1 = first + 1;
	var _g = first + k;
	while(_g1 < _g) {
		var i = _g1++;
		var x = a[i];
		var j = i;
		while(j > first) {
			var y = a[j - 1];
			if(cmp(y,x) > 0) {
				a[j] = y;
				j--;
			} else break;
		}
		a[j] = x;
	}
};
de.polygonal.ds.ArrayUtil._quickSort = function(a,first,k,cmp) {
	var last = first + k - 1;
	var lo = first;
	var hi = last;
	if(k > 1) {
		var i0 = first;
		var i1 = i0 + (k >> 1);
		var i2 = i0 + k - 1;
		var t0 = a[i0];
		var t1 = a[i1];
		var t2 = a[i2];
		var mid;
		var t = cmp(t0,t2);
		if(t < 0 && cmp(t0,t1) < 0) if(cmp(t1,t2) < 0) mid = i1; else mid = i2; else if(cmp(t1,t0) < 0 && cmp(t1,t2) < 0) if(t < 0) mid = i0; else mid = i2; else if(cmp(t2,t0) < 0) mid = i1; else mid = i0;
		var pivot = a[mid];
		a[mid] = a[first];
		while(lo < hi) {
			while(cmp(pivot,a[hi]) < 0 && lo < hi) hi--;
			if(hi != lo) {
				a[lo] = a[hi];
				lo++;
			}
			while(cmp(pivot,a[lo]) > 0 && lo < hi) lo++;
			if(hi != lo) {
				a[hi] = a[lo];
				hi--;
			}
		}
		a[lo] = pivot;
		de.polygonal.ds.ArrayUtil._quickSort(a,first,lo - first,cmp);
		de.polygonal.ds.ArrayUtil._quickSort(a,lo + 1,last - lo,cmp);
	}
};
de.polygonal.ds.Cloneable = function() { };
$hxClasses["de.polygonal.ds.Cloneable"] = de.polygonal.ds.Cloneable;
de.polygonal.ds.Cloneable.__name__ = ["de","polygonal","ds","Cloneable"];
de.polygonal.ds.Cloneable.prototype = {
	__class__: de.polygonal.ds.Cloneable
};
de.polygonal.ds.Hashable = function() { };
$hxClasses["de.polygonal.ds.Hashable"] = de.polygonal.ds.Hashable;
de.polygonal.ds.Hashable.__name__ = ["de","polygonal","ds","Hashable"];
de.polygonal.ds.Hashable.prototype = {
	__class__: de.polygonal.ds.Hashable
};
de.polygonal.ds.Collection = function() { };
$hxClasses["de.polygonal.ds.Collection"] = de.polygonal.ds.Collection;
de.polygonal.ds.Collection.__name__ = ["de","polygonal","ds","Collection"];
de.polygonal.ds.Collection.__interfaces__ = [de.polygonal.ds.Hashable];
de.polygonal.ds.Collection.prototype = {
	__class__: de.polygonal.ds.Collection
};
de.polygonal.ds.Comparable = function() { };
$hxClasses["de.polygonal.ds.Comparable"] = de.polygonal.ds.Comparable;
de.polygonal.ds.Comparable.__name__ = ["de","polygonal","ds","Comparable"];
de.polygonal.ds.Comparable.prototype = {
	__class__: de.polygonal.ds.Comparable
};
de.polygonal.ds.DA = function(reservedSize,maxSize) {
	if(maxSize == null) maxSize = -1;
	if(reservedSize == null) reservedSize = 0;
	this._size = 0;
	this._iterator = null;
	this.maxSize = -1;
	if(reservedSize > 0) this._a = de.polygonal.ds.ArrayUtil.alloc(reservedSize); else this._a = new Array();
	this.key = de.polygonal.ds.HashKey._counter++;
	this.reuseIterator = false;
};
$hxClasses["de.polygonal.ds.DA"] = de.polygonal.ds.DA;
de.polygonal.ds.DA.__name__ = ["de","polygonal","ds","DA"];
de.polygonal.ds.DA.__interfaces__ = [de.polygonal.ds.Collection];
de.polygonal.ds.DA.prototype = {
	pack: function() {
		var s = this._a.length;
		if(s == this._size) return;
		var tmp = this._a;
		this._a = de.polygonal.ds.ArrayUtil.alloc(this._size);
		var _g1 = 0;
		var _g = this._size;
		while(_g1 < _g) {
			var i = _g1++;
			this._a[i] = tmp[i];
		}
		var _g11 = this._size;
		var _g2 = tmp.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			tmp[i1] = null;
		}
	}
	,reserve: function(x) {
		if(this._size == x) return;
		var tmp = this._a;
		this._a = de.polygonal.ds.ArrayUtil.alloc(x);
		if(this._size < x) {
			var _g1 = 0;
			var _g = this._size;
			while(_g1 < _g) {
				var i = _g1++;
				this._a[i] = tmp[i];
			}
		}
	}
	,trim: function(x) {
		this._size = x;
	}
	,get: function(i) {
		return this._a[i];
	}
	,getNext: function(i) {
		return this._a[i + 1 == this._size?0:i + 1];
	}
	,getPrev: function(i) {
		return this._a[i - 1 == -1?this._size - 1:i - 1];
	}
	,set: function(i,x) {
		this._a[i] = x;
		if(i >= this._size) this._size++;
	}
	,swp: function(i,j) {
		var tmp = this._a[i];
		this._a[i] = this._a[j];
		if(i >= this._size) this._size++;
		this._a[j] = tmp;
		if(j >= this._size) this._size++;
	}
	,cpy: function(i,j) {
		this._a[i] = this._a[j];
		if(i >= this._size) this._size++;
	}
	,front: function() {
		return this._a[0];
	}
	,back: function() {
		return this._a[this._size - 1];
	}
	,popBack: function() {
		var x = this._a[this._size - 1];
		this._size--;
		return x;
	}
	,pushBack: function(x) {
		this.set(this._size,x);
	}
	,popFront: function() {
		return this.removeAt(0);
	}
	,pushFront: function(x) {
		this.insertAt(0,x);
	}
	,insertAt: function(i,x) {
		var p = this._size;
		while(p > i) this.__cpy(p--,p);
		this._a[i] = x;
		this._size++;
	}
	,removeAt: function(i) {
		var x = this._a[i];
		var k = this._size - 1;
		var p = i;
		while(p < k) this.__cpy(p++,p);
		this._size--;
		return x;
	}
	,swapPop: function(i) {
		this.__set(i,this.__get(--this._size));
	}
	,removeRange: function(i,n,output) {
		if(output == null) {
			var s = this._size;
			var p = i + n;
			while(p < s) {
				this._a[p - n] = this._a[p];
				p++;
			}
		} else {
			var s1 = this._size;
			var p1 = i + n;
			var e;
			var j;
			while(p1 < s1) {
				j = p1 - n;
				e = this._a[j];
				output.set(output._size,e);
				this.__cpy(j,p1++);
			}
		}
		this._size -= n;
		return output;
	}
	,concat: function(x,copy) {
		if(copy == null) copy = false;
		if(copy) {
			var copy1 = new de.polygonal.ds.DA();
			copy1._size = this._size + x._size;
			var _g1 = 0;
			var _g = this._size;
			while(_g1 < _g) {
				var i = _g1++;
				copy1._a[i] = this._a[i];
				if(i >= copy1._size) copy1._size++;
			}
			var _g11 = this._size;
			var _g2 = this._size + x._size;
			while(_g11 < _g2) {
				var i1 = _g11++;
				copy1._a[i1] = x._a[i1 - this._size];
				if(i1 >= copy1._size) copy1._size++;
			}
			return copy1;
		} else {
			var j = this._size;
			this._size += x._size;
			var _g0 = 0;
			var _g3 = x._size;
			while(_g0 < _g3) {
				var i2 = _g0++;
				this.__set(j++,x._a[i2]);
			}
			return this;
		}
	}
	,indexOf: function(x,from,binarySearch,comparator) {
		if(binarySearch == null) binarySearch = false;
		if(from == null) from = 0;
		if(this._size == 0) return -1; else if(binarySearch) {
			if(comparator != null) return de.polygonal.ds.ArrayUtil.bsearchComparator(this._a,x,from,this._size - 1,comparator); else {
				var k = this._size;
				var l = from;
				var m;
				var h = k;
				while(l < h) {
					m = l + (h - l >> 1);
					if((js.Boot.__cast(this._a[m] , de.polygonal.ds.Comparable)).compare(x) < 0) l = m + 1; else h = m;
				}
				if(l <= k && (js.Boot.__cast(this._a[l] , de.polygonal.ds.Comparable)).compare(x) == 0) return l; else return -l;
			}
		} else {
			var i = from;
			var j = -1;
			var k1 = this._size - 1;
			do if(this._a[i] == x) {
				j = i;
				break;
			} while(i++ < k1);
			return j;
		}
	}
	,lastIndexOf: function(x,from) {
		if(from == null) from = -1;
		if(this._size == 0) return -1; else {
			if(from < 0) from = this._size + from;
			var j = -1;
			var i = from;
			do if(this._a[i] == x) {
				j = i;
				break;
			} while(i-- > 0);
			return j;
		}
	}
	,reverse: function() {
		if(this._a.length > this._size) this._a = de.polygonal.ds.ArrayUtil.shrink(this._a,this._size);
		this._a.reverse();
	}
	,assign: function(C,args,n) {
		if(n == null) n = 0;
		if(n > 0) this._size = n; else n = this._size;
		if(args == null) args = [];
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			this.__set(i,Type.createInstance(C,args));
		}
	}
	,fill: function(x,n) {
		if(n == null) n = 0;
		if(n > 0) this._size = n; else n = this._size;
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			this._a[i] = x;
		}
		return this;
	}
	,memmove: function(destination,source,n) {
		if(source == destination) return; else if(source <= destination) {
			var i = source + n;
			var j = destination + n;
			var _g = 0;
			while(_g < n) {
				var k = _g++;
				i--;
				j--;
				this._a[j] = this._a[i];
			}
		} else {
			var i1 = source;
			var j1 = destination;
			var _g1 = 0;
			while(_g1 < n) {
				var k1 = _g1++;
				this._a[j1] = this._a[i1];
				i1++;
				j1++;
			}
		}
	}
	,join: function(x) {
		if(this._size == 0) return "";
		if(this._size == 1) return Std.string(this._a[0]);
		var s = Std.string(this._a[0]) + x;
		var _g1 = 1;
		var _g = this._size - 1;
		while(_g1 < _g) {
			var i = _g1++;
			s += Std.string(this._a[i]);
			s += x;
		}
		s += Std.string(this._a[this._size - 1]);
		return s;
	}
	,sort: function(compare,useInsertionSort,first,count) {
		if(count == null) count = -1;
		if(first == null) first = 0;
		if(useInsertionSort == null) useInsertionSort = false;
		if(this._size > 1) {
			if(count == -1) count = this._size - first;
			if(compare == null) {
				if(useInsertionSort) this._insertionSortComparable(first,count); else this._quickSortComparable(first,count);
			} else if(useInsertionSort) this._insertionSort(first,count,compare); else if(first == 0 && count == this._size) {
				de.polygonal.ds.ArrayUtil.shrink(this._a,this._size);
				this._a.sort(compare);
			} else this._quickSort(first,count,compare);
		}
	}
	,inRange: function(i) {
		return i >= 0 && i < this._size;
	}
	,getArray: function() {
		return this._a;
	}
	,free: function() {
		var _g1 = 0;
		var _g = this._a.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._a[i] = null;
		}
		this._a = null;
		this._iterator = null;
	}
	,contains: function(x) {
		var found = false;
		var _g1 = 0;
		var _g = this._size;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._a[i] == x) {
				found = true;
				break;
			}
		}
		return found;
	}
	,remove: function(x) {
		if(this._size == 0) return false;
		var i = 0;
		var s = this._size;
		while(i < s) {
			if(this._a[i] == x) {
				s--;
				var p = i;
				while(p < s) {
					this._a[p] = this._a[p + 1];
					++p;
				}
				continue;
			}
			i++;
		}
		var found = this._size - s != 0;
		this._size = s;
		return found;
	}
	,clear: function(purge) {
		if(purge == null) purge = false;
		if(purge) {
			var _g1 = 0;
			var _g = this._a.length;
			while(_g1 < _g) {
				var i = _g1++;
				this._a[i] = null;
			}
		}
		this._size = 0;
	}
	,iterator: function() {
		if(this.reuseIterator) {
			if(this._iterator == null) this._iterator = new de.polygonal.ds.DAIterator(this); else this._iterator.reset();
			return this._iterator;
		} else return new de.polygonal.ds.DAIterator(this);
	}
	,size: function() {
		return this._size;
	}
	,isEmpty: function() {
		return this._size == 0;
	}
	,toArray: function() {
		var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
		var _g1 = 0;
		var _g = this._size;
		while(_g1 < _g) {
			var i = _g1++;
			a[i] = this._a[i];
		}
		return a;
	}
	,clone: function(assign,copier) {
		if(assign == null) assign = true;
		var copy = new de.polygonal.ds.DA(this._size,this.maxSize);
		copy._size = this._size;
		if(assign) {
			var _g1 = 0;
			var _g = this._size;
			while(_g1 < _g) {
				var i = _g1++;
				copy._a[i] = this._a[i];
			}
		} else if(copier == null) {
			var c = null;
			var _g11 = 0;
			var _g2 = this._size;
			while(_g11 < _g2) {
				var i1 = _g11++;
				c = js.Boot.__cast(this._a[i1] , de.polygonal.ds.Cloneable);
				copy.__set(i1,c.clone());
			}
		} else {
			var _g0 = 0;
			var _g3 = this._size;
			while(_g0 < _g3) {
				var i2 = _g0++;
				copy.__set(i2,copier(this._a[i2]));
			}
		}
		return copy;
	}
	,shuffle: function(rval) {
		var s = this._size;
		if(rval == null) {
			var m = Math;
			while(--s > 1) {
				var i = Std["int"](m.random() * s);
				var t = this._a[s];
				this._a[s] = this._a[i];
				this._a[i] = t;
			}
		} else {
			var j = 0;
			while(--s > 1) {
				var i1 = Std["int"](rval.get(j++) * s);
				var t1 = this._a[s];
				this._a[s] = this._a[i1];
				this._a[i1] = t1;
			}
		}
	}
	,toString: function() {
		var s = "{ DA size: " + this._size + " }";
		if(this._size == 0) return s;
		s += "\n[\n";
		var _g1 = 0;
		var _g = this._size;
		while(_g1 < _g) {
			var i = _g1++;
			s += de.polygonal.Printf.format("  %4d -> %s\n",[i,Std.string(this._a[i])]);
		}
		s += "]";
		return s;
	}
	,_quickSort: function(first,k,cmp) {
		var last = first + k - 1;
		var lo = first;
		var hi = last;
		if(k > 1) {
			var i0 = first;
			var i1 = i0 + (k >> 1);
			var i2 = i0 + k - 1;
			var t0 = this._a[i0];
			var t1 = this._a[i1];
			var t2 = this._a[i2];
			var mid;
			var t = cmp(t0,t2);
			if(t < 0 && cmp(t0,t1) < 0) if(cmp(t1,t2) < 0) mid = i1; else mid = i2; else if(cmp(t1,t0) < 0 && cmp(t1,t2) < 0) if(t < 0) mid = i0; else mid = i2; else if(cmp(t2,t0) < 0) mid = i1; else mid = i0;
			var pivot = this._a[mid];
			this._a[mid] = this._a[first];
			while(lo < hi) {
				while(cmp(pivot,this._a[hi]) < 0 && lo < hi) hi--;
				if(hi != lo) {
					this._a[lo] = this._a[hi];
					lo++;
				}
				while(cmp(pivot,this._a[lo]) > 0 && lo < hi) lo++;
				if(hi != lo) {
					this._a[hi] = this._a[lo];
					hi--;
				}
			}
			this._a[lo] = pivot;
			this._quickSort(first,lo - first,cmp);
			this._quickSort(lo + 1,last - lo,cmp);
		}
	}
	,_quickSortComparable: function(first,k) {
		var last = first + k - 1;
		var lo = first;
		var hi = last;
		if(k > 1) {
			var i0 = first;
			var i1 = i0 + (k >> 1);
			var i2 = i0 + k - 1;
			var t0;
			t0 = js.Boot.__cast(this._a[i0] , de.polygonal.ds.Comparable);
			var t1;
			t1 = js.Boot.__cast(this._a[i1] , de.polygonal.ds.Comparable);
			var t2;
			t2 = js.Boot.__cast(this._a[i2] , de.polygonal.ds.Comparable);
			var mid;
			var t = t0.compare(t2);
			if(t < 0 && t0.compare(t1) < 0) if(t1.compare(t2) < 0) mid = i1; else mid = i2; else if(t0.compare(t1) < 0 && t1.compare(t2) < 0) if(t < 0) mid = i0; else mid = i2; else if(t2.compare(t0) < 0) mid = i1; else mid = i0;
			var pivot;
			pivot = js.Boot.__cast(this._a[mid] , de.polygonal.ds.Comparable);
			this._a[mid] = this._a[first];
			while(lo < hi) {
				while(pivot.compare(js.Boot.__cast(this._a[hi] , de.polygonal.ds.Comparable)) < 0 && lo < hi) hi--;
				if(hi != lo) {
					this._a[lo] = this._a[hi];
					lo++;
				}
				while(pivot.compare(js.Boot.__cast(this._a[lo] , de.polygonal.ds.Comparable)) > 0 && lo < hi) lo++;
				if(hi != lo) {
					this._a[hi] = this._a[lo];
					hi--;
				}
			}
			this._a[lo] = pivot;
			this._quickSortComparable(first,lo - first);
			this._quickSortComparable(lo + 1,last - lo);
		}
	}
	,_insertionSort: function(first,k,cmp) {
		var _g1 = first + 1;
		var _g = first + k;
		while(_g1 < _g) {
			var i = _g1++;
			var x = this._a[i];
			var j = i;
			while(j > first) {
				var y = this._a[j - 1];
				if(cmp(y,x) > 0) {
					this._a[j] = y;
					j--;
				} else break;
			}
			this._a[j] = x;
		}
	}
	,_insertionSortComparable: function(first,k) {
		var _g1 = first + 1;
		var _g = first + k;
		while(_g1 < _g) {
			var i = _g1++;
			var x = this._a[i];
			var j = i;
			while(j > first) {
				var y = this._a[j - 1];
				if((js.Boot.__cast(y , de.polygonal.ds.Comparable)).compare(x) > 0) {
					this._a[j] = y;
					j--;
				} else break;
			}
			this._a[j] = x;
		}
	}
	,__get: function(i) {
		return this._a[i];
	}
	,__set: function(i,x) {
		this._a[i] = x;
	}
	,__cpy: function(i,j) {
		this._a[i] = this._a[j];
	}
	,__class__: de.polygonal.ds.DA
};
de.polygonal.ds.Itr = function() { };
$hxClasses["de.polygonal.ds.Itr"] = de.polygonal.ds.Itr;
de.polygonal.ds.Itr.__name__ = ["de","polygonal","ds","Itr"];
de.polygonal.ds.Itr.prototype = {
	__class__: de.polygonal.ds.Itr
};
de.polygonal.ds.DAIterator = function(f) {
	this._f = f;
	{
		this._a = this._f._a;
		this._s = this._f._size;
		this._i = 0;
		this;
	}
};
$hxClasses["de.polygonal.ds.DAIterator"] = de.polygonal.ds.DAIterator;
de.polygonal.ds.DAIterator.__name__ = ["de","polygonal","ds","DAIterator"];
de.polygonal.ds.DAIterator.__interfaces__ = [de.polygonal.ds.Itr];
de.polygonal.ds.DAIterator.prototype = {
	reset: function() {
		this._a = this._f._a;
		this._s = this._f._size;
		this._i = 0;
		return this;
	}
	,hasNext: function() {
		return this._i < this._s;
	}
	,next: function() {
		return this._a[this._i++];
	}
	,remove: function() {
		this._f.removeAt(--this._i);
		this._s--;
	}
	,__a: function(f) {
		return f._a;
	}
	,__size: function(f) {
		return f._size;
	}
	,__class__: de.polygonal.ds.DAIterator
};
de.polygonal.ds.HashKey = function() { };
$hxClasses["de.polygonal.ds.HashKey"] = de.polygonal.ds.HashKey;
de.polygonal.ds.HashKey.__name__ = ["de","polygonal","ds","HashKey"];
de.polygonal.ds.HashKey.next = function() {
	return de.polygonal.ds.HashKey._counter++;
};
de.polygonal.ds.Set = function() { };
$hxClasses["de.polygonal.ds.Set"] = de.polygonal.ds.Set;
de.polygonal.ds.Set.__name__ = ["de","polygonal","ds","Set"];
de.polygonal.ds.Set.__interfaces__ = [de.polygonal.ds.Collection];
de.polygonal.ds.Set.prototype = {
	__class__: de.polygonal.ds.Set
};
de.polygonal.ds.ListSet = function() {
	this._a = new de.polygonal.ds.DA();
	this.key = de.polygonal.ds.HashKey._counter++;
	this.reuseIterator = false;
};
$hxClasses["de.polygonal.ds.ListSet"] = de.polygonal.ds.ListSet;
de.polygonal.ds.ListSet.__name__ = ["de","polygonal","ds","ListSet"];
de.polygonal.ds.ListSet.__interfaces__ = [de.polygonal.ds.Set];
de.polygonal.ds.ListSet.prototype = {
	toString: function() {
		var s = "{ ListSet size: " + this.size() + " }";
		if(this.isEmpty()) return s;
		s += "\n[\n";
		var _g1 = 0;
		var _g = this.size();
		while(_g1 < _g) {
			var i = _g1++;
			s += "  " + Std.string(this._a._a[i]) + "\n";
		}
		s += "]";
		return s;
	}
	,has: function(x) {
		return this._a.contains(x);
	}
	,set: function(x) {
		if(this._a.contains(x)) return false; else {
			this._a.pushBack(x);
			return true;
		}
	}
	,merge: function(x,assign,copier) {
		if(assign) {
			var $it0 = x.iterator();
			while( $it0.hasNext() ) {
				var val = $it0.next();
				this.set(val);
			}
		} else if(copier != null) {
			var $it1 = x.iterator();
			while( $it1.hasNext() ) {
				var val1 = $it1.next();
				this.set(copier(val1));
			}
		} else {
			var $it2 = x.iterator();
			while( $it2.hasNext() ) {
				var val2 = $it2.next();
				this.set(val2.clone());
			}
		}
	}
	,free: function() {
		this._a.free();
		this._a = null;
	}
	,contains: function(x) {
		return this._a.contains(x);
	}
	,remove: function(x) {
		return this._a.remove(x);
	}
	,clear: function(purge) {
		if(purge == null) purge = false;
		this._a.clear(purge);
	}
	,iterator: function() {
		this._a.reuseIterator = this.reuseIterator;
		return this._a.iterator();
	}
	,isEmpty: function() {
		return this._a._size == 0;
	}
	,size: function() {
		return this._a._size;
	}
	,toArray: function() {
		return this._a.toArray();
	}
	,clone: function(assign,copier) {
		if(assign == null) assign = true;
		var copy = Type.createEmptyInstance(de.polygonal.ds.ListSet);
		copy.key = de.polygonal.ds.HashKey._counter++;
		copy._a = this._a.clone(assign,copier);
		return copy;
	}
	,__class__: de.polygonal.ds.ListSet
};
de.polygonal.ds.Prioritizable = function() { };
$hxClasses["de.polygonal.ds.Prioritizable"] = de.polygonal.ds.Prioritizable;
de.polygonal.ds.Prioritizable.__name__ = ["de","polygonal","ds","Prioritizable"];
de.polygonal.ds.Prioritizable.prototype = {
	__class__: de.polygonal.ds.Prioritizable
};
de.polygonal.ds.Queue = function() { };
$hxClasses["de.polygonal.ds.Queue"] = de.polygonal.ds.Queue;
de.polygonal.ds.Queue.__name__ = ["de","polygonal","ds","Queue"];
de.polygonal.ds.Queue.__interfaces__ = [de.polygonal.ds.Collection];
de.polygonal.ds.Queue.prototype = {
	__class__: de.polygonal.ds.Queue
};
de.polygonal.ds.PriorityQueue = function(inverse,reservedSize,maxSize) {
	if(maxSize == null) maxSize = -1;
	if(reservedSize == null) reservedSize = 0;
	if(inverse == null) inverse = false;
	this.maxSize = -1;
	this._inverse = inverse;
	this._iterator = null;
	if(reservedSize > 0) this._a = de.polygonal.ds.ArrayUtil.alloc(reservedSize + 1); else this._a = new Array();
	this._a[0] = null;
	this._size = 0;
	this.key = de.polygonal.ds.HashKey._counter++;
	this.reuseIterator = false;
};
$hxClasses["de.polygonal.ds.PriorityQueue"] = de.polygonal.ds.PriorityQueue;
de.polygonal.ds.PriorityQueue.__name__ = ["de","polygonal","ds","PriorityQueue"];
de.polygonal.ds.PriorityQueue.__interfaces__ = [de.polygonal.ds.Queue];
de.polygonal.ds.PriorityQueue.prototype = {
	pack: function() {
		if(this._a.length - 1 == this._size) return;
		var tmp = this._a;
		this._a = de.polygonal.ds.ArrayUtil.alloc(this._size + 1);
		this._a[0] = null;
		var _g1 = 1;
		var _g = this._size + 1;
		while(_g1 < _g) {
			var i = _g1++;
			this._a[i] = tmp[i];
		}
		var _g11 = this._size + 1;
		var _g2 = tmp.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			tmp[i1] = null;
		}
	}
	,reserve: function(x) {
		if(this._size == x) return;
		var tmp = this._a;
		this._a = de.polygonal.ds.ArrayUtil.alloc(x + 1);
		this._a[0] = null;
		if(this._size < x) {
			var _g1 = 1;
			var _g = this._size + 1;
			while(_g1 < _g) {
				var i = _g1++;
				this._a[i] = tmp[i];
			}
		}
	}
	,peek: function() {
		return this._a[1];
	}
	,back: function() {
		if(this._size == 1) return this._a[1];
		var a = this._a[1];
		var b;
		if(this._inverse) {
			var _g1 = 2;
			var _g = this._size + 1;
			while(_g1 < _g) {
				var i = _g1++;
				b = this._a[i];
				if(a.priority < b.priority) a = b;
			}
		} else {
			var _g11 = 2;
			var _g2 = this._size + 1;
			while(_g11 < _g2) {
				var i1 = _g11++;
				b = this._a[i1];
				if(a.priority > b.priority) a = b;
			}
		}
		return a;
	}
	,enqueue: function(x) {
		this.__set(++this._size,x);
		x.position = this._size;
		this._upheap(this._size);
	}
	,dequeue: function() {
		var x = this._a[1];
		x.position = -1;
		this._a[1] = this._a[this._size];
		this._downheap(1);
		this._size--;
		return x;
	}
	,reprioritize: function(x,priority) {
		var oldPriority = x.priority;
		if(oldPriority != priority) {
			x.priority = priority;
			var pos = x.position;
			if(this._inverse) {
				if(priority < oldPriority) this._upheap(pos); else {
					this._downheap(pos);
					this._upheap(this._size);
				}
			} else if(priority > oldPriority) this._upheap(pos); else {
				this._downheap(pos);
				this._upheap(this._size);
			}
		}
	}
	,toString: function() {
		var s = "{ PriorityQueue size: " + this._size + " }";
		if(this._size == 0) return s;
		var tmp = new de.polygonal.ds.PriorityQueue();
		tmp._inverse = this._inverse;
		var _g1 = 1;
		var _g = this._size + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var w = new de.polygonal.ds._PriorityQueue.PQElementWrapper(this._a[i]);
			tmp._a[i] = w;
		}
		tmp._size = this._size;
		s += "\n[ front\n";
		var i1 = 0;
		while(tmp._size > 0) s += de.polygonal.Printf.format("  %4d -> %s\n",[i1++,Std.string(tmp.dequeue())]);
		s += "]";
		return s;
	}
	,free: function() {
		var _g1 = 0;
		var _g = this._a.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._a[i] = null;
		}
		this._a = null;
		if(this._iterator != null) {
			this._iterator.free();
			this._iterator = null;
		}
	}
	,contains: function(x) {
		var position = x.position;
		return position > 0 && position <= this._size && this._a[position] == x;
	}
	,remove: function(x) {
		if(this._size == 0) return false; else {
			if(x.position == 1) this.dequeue(); else {
				var p = x.position;
				this._a[p] = this._a[this._size];
				this._downheap(p);
				this._upheap(p);
				this._size--;
			}
			return true;
		}
	}
	,clear: function(purge) {
		if(purge == null) purge = false;
		if(purge) {
			var _g1 = 1;
			var _g = this._a.length;
			while(_g1 < _g) {
				var i = _g1++;
				this._a[i] = null;
			}
		}
		this._size = 0;
	}
	,iterator: function() {
		if(this.reuseIterator) {
			if(this._iterator == null) return new de.polygonal.ds.PriorityQueueIterator(this); else this._iterator.reset();
			return this._iterator;
		} else return new de.polygonal.ds.PriorityQueueIterator(this);
	}
	,size: function() {
		return this._size;
	}
	,isEmpty: function() {
		return this._size == 0;
	}
	,toArray: function() {
		var a = de.polygonal.ds.ArrayUtil.alloc(this._size);
		var _g1 = 1;
		var _g = this._size + 1;
		while(_g1 < _g) {
			var i = _g1++;
			a[i - 1] = this._a[i];
		}
		return a;
	}
	,clone: function(assign,copier) {
		if(assign == null) assign = true;
		var copy = new de.polygonal.ds.PriorityQueue(this._inverse,this._size,this.maxSize);
		if(this._size == 0) return copy;
		if(assign) {
			var _g1 = 1;
			var _g = this._size + 1;
			while(_g1 < _g) {
				var i = _g1++;
				copy._a[i] = this._a[i];
			}
		} else if(copier == null) {
			var _g11 = 1;
			var _g2 = this._size + 1;
			while(_g11 < _g2) {
				var i1 = _g11++;
				var e = this._a[i1];
				var c = e.clone();
				c.position = e.position;
				c.priority = e.priority;
				copy._a[i1] = c;
			}
		} else {
			var _g0 = 1;
			var _g3 = this._size + 1;
			while(_g0 < _g3) {
				var i2 = _g0++;
				var e1 = this._a[i2];
				var c1 = copier(e1);
				c1.position = e1.position;
				c1.priority = e1.priority;
				copy._a[i2] = c1;
			}
		}
		copy._size = this._size;
		return copy;
	}
	,_upheap: function(index) {
		var parent = index >> 1;
		var tmp = this._a[index];
		var p = tmp.priority;
		if(this._inverse) while(parent > 0) {
			var parentVal = this._a[parent];
			if(p - parentVal.priority < 0) {
				this._a[index] = parentVal;
				parentVal.position = index;
				index = parent;
				parent >>= 1;
			} else break;
		} else while(parent > 0) {
			var parentVal1 = this._a[parent];
			if(p - parentVal1.priority > 0) {
				this._a[index] = parentVal1;
				parentVal1.position = index;
				index = parent;
				parent >>= 1;
			} else break;
		}
		this._a[index] = tmp;
		tmp.position = index;
	}
	,_downheap: function(index) {
		var child = index << 1;
		var childVal;
		var tmp = this._a[index];
		var p = tmp.priority;
		if(this._inverse) while(child < this._size) {
			if(child < this._size - 1) {
				if(this._a[child].priority - this._a[child + 1].priority > 0) child++;
			}
			childVal = this._a[child];
			if(p - childVal.priority > 0) {
				this._a[index] = childVal;
				childVal.position = index;
				tmp.position = child;
				index = child;
				child <<= 1;
			} else break;
		} else while(child < this._size) {
			if(child < this._size - 1) {
				if(this._a[child].priority - this._a[child + 1].priority < 0) child++;
			}
			childVal = this._a[child];
			if(p - childVal.priority < 0) {
				this._a[index] = childVal;
				childVal.position = index;
				tmp.position = child;
				index = child;
				child <<= 1;
			} else break;
		}
		this._a[index] = tmp;
		tmp.position = index;
	}
	,__get: function(i) {
		return this._a[i];
	}
	,__set: function(i,x) {
		this._a[i] = x;
	}
	,__class__: de.polygonal.ds.PriorityQueue
};
de.polygonal.ds.PriorityQueueIterator = function(f) {
	this._f = f;
	this._a = new Array();
	this._a[0] = null;
	this.reset();
};
$hxClasses["de.polygonal.ds.PriorityQueueIterator"] = de.polygonal.ds.PriorityQueueIterator;
de.polygonal.ds.PriorityQueueIterator.__name__ = ["de","polygonal","ds","PriorityQueueIterator"];
de.polygonal.ds.PriorityQueueIterator.__interfaces__ = [de.polygonal.ds.Itr];
de.polygonal.ds.PriorityQueueIterator.prototype = {
	free: function() {
		this._a = null;
	}
	,reset: function() {
		this._s = this._f._size + 1;
		this._i = 1;
		var a = this._f._a;
		var _g1 = 1;
		var _g = this._s;
		while(_g1 < _g) {
			var i = _g1++;
			this._a[i] = a[i];
		}
		return this;
	}
	,hasNext: function() {
		return this._i < this._s;
	}
	,next: function() {
		return this._a[this._i++];
	}
	,remove: function() {
		this._f.remove(this._a[this._i - 1]);
	}
	,__a: function(f) {
		return f._a;
	}
	,__class__: de.polygonal.ds.PriorityQueueIterator
};
de.polygonal.ds._PriorityQueue = {};
de.polygonal.ds._PriorityQueue.PQElementWrapper = function(e) {
	this.e = e;
	this.priority = e.priority;
	this.position = e.position;
};
$hxClasses["de.polygonal.ds._PriorityQueue.PQElementWrapper"] = de.polygonal.ds._PriorityQueue.PQElementWrapper;
de.polygonal.ds._PriorityQueue.PQElementWrapper.__name__ = ["de","polygonal","ds","_PriorityQueue","PQElementWrapper"];
de.polygonal.ds._PriorityQueue.PQElementWrapper.__interfaces__ = [de.polygonal.ds.Prioritizable];
de.polygonal.ds._PriorityQueue.PQElementWrapper.prototype = {
	toString: function() {
		return Std.string(this.e);
	}
	,__class__: de.polygonal.ds._PriorityQueue.PQElementWrapper
};
de.polygonal.ds.error = {};
de.polygonal.ds.error.Assert = function() { };
$hxClasses["de.polygonal.ds.error.Assert"] = de.polygonal.ds.error.Assert;
de.polygonal.ds.error.Assert.__name__ = ["de","polygonal","ds","error","Assert"];
flash.Lib = function() { };
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__init = function() {
	var o;
	flash.Lib.schList = [];
	flash.Lib.schLength = 0;
	window.reqAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(o1) {
		window.setTimeout(o1,700 / flash.Lib.frameRate,null);
	};
	o = navigator.userAgent || navigator.vendor || window.opera;
	flash.Lib.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(o) || /07|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(0|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(7|0|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4));
};
flash.Lib.getTimer = function() {
	return ~(~(Date.now() - flash.Lib.qTimeStamp));
};
flash.Lib.getURL = function(url,target) {
	window.open(url.url,target);
};
flash.Lib.jsNode = function(o) {
	var r = window.document.createElement(o);
	r.style.position = "absolute";
	return r;
};
flash.Lib.jsDiv = function() {
	return flash.Lib.jsNode("div");
};
flash.Lib.jsCanvas = function() {
	return flash.Lib.jsNode("canvas");
};
flash.Lib.jsHelper = function() {
	if(flash.Lib.qHelper == null) {
		var o = flash.Lib.jsDiv();
		flash.Lib.get_stage().component.appendChild(o);
		o.style.visibility = "hidden";
		o.appendChild(flash.Lib.qHelper = flash.Lib.jsDiv());
	}
	return flash.Lib.qHelper;
};
flash.Lib.get_current = function() {
	if(flash.Lib.qCurrent == null) flash.Lib.get_stage().addChild(flash.Lib.qCurrent = new flash.display.MovieClip());
	return flash.Lib.qCurrent;
};
flash.Lib.get_stage = function() {
	if(flash.Lib.qStage == null) window.document.body.appendChild((flash.Lib.qStage = new flash.display.Stage()).component);
	return flash.Lib.qStage;
};
flash.Lib.requestAnimationFrame = function(handler) {
	window.reqAnimFrame(handler);
};
flash.Lib.schedule = function(m) {
	flash.Lib.schList[flash.Lib.schLength++] = m;
};
flash.Lib.rgba = function(color) {
	return "rgba(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + "," + ((color >> 24 & 255) / 255).toFixed(4) + ")";
};
flash.Lib.rgbf = function(color,alpha) {
	return "rgba(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + "," + alpha.toFixed(4) + ")";
};
flash.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	this.smoothing = false;
	flash.display.DisplayObject.call(this);
	this.set_bitmapData(bitmapData);
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(v) {
		if(this.bitmapData != null) this.component.removeChild(this.bitmapData.component);
		if(v != null) this.component.appendChild(v.handle());
		return this.bitmapData = v;
	}
	,set_smoothing: function(v) {
		var o = this.bitmapData.qContext;
		var v1;
		v1 = Std.string(this) + ".smoothing = " + (v == null?"null":"" + v);
		null;
		o.imageSmoothingEnabled = o.oImageSmoothingEnabled = o.msImageSmoothingEnabled = o.webkitImageSmoothingEnabled = o.mozImageSmoothingEnabled = v;
		return v;
	}
	,get_width: function() {
		if(this.qWidth != null) return this.qWidth; else if(this.bitmapData != null) return this.bitmapData.component.width; else return 0;
	}
	,get_height: function() {
		if(this.qHeight != null) return this.qHeight; else if(this.bitmapData != null) return this.bitmapData.component.height; else return 0;
	}
	,drawToSurface: function(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing) {
		this.bitmapData.drawToSurface(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing);
	}
	,__class__: flash.display.Bitmap
});
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
};
flash.display.BitmapData = function(inWidth,inHeight,inTransparent,inFillColor) {
	if(inTransparent == null) inTransparent = true;
	this.qSync = 1;
	this.qTransparent = inTransparent;
	this.qTick = 0;
	this.qTime = new Date().getTime();
	this.rect = new flash.geom.Rectangle(0,0,inWidth,inHeight);
	this.component = flash.Lib.jsCanvas();
	this.component.width = inWidth;
	this.component.height = inHeight;
	this.qContext = this.component.getContext("2d");
	flash.display.BitmapData.setSmoothing(this.qContext,true);
	this.qPixel = this.qContext.createImageData(1,1);
	if(inFillColor == null) inFillColor = -1;
	if(!inTransparent) inFillColor |= -16777216;
	if((inFillColor & -16777216) != 0) this.fillRect(this.rect,inFillColor);
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.setSmoothing = function(o,v) {
	o.imageSmoothingEnabled = o.oImageSmoothingEnabled = o.msImageSmoothingEnabled = o.webkitImageSmoothingEnabled = o.mozImageSmoothingEnabled = v;
};
flash.display.BitmapData.makeColor = function(color) {
	return "rgba(" + Std.string((function($this) {
		var $r;
		var $int = color >> 16 & 255;
		$r = $int < 0?4294967296.0 + $int:$int + 0.0;
		return $r;
	}(this))) + "," + Std.string((function($this) {
		var $r;
		var int1 = color >> 8 & 255;
		$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
		return $r;
	}(this))) + "," + Std.string((function($this) {
		var $r;
		var int2 = color & 255;
		$r = int2 < 0?4294967296.0 + int2:int2 + 0.0;
		return $r;
	}(this))) + "," + ((function($this) {
		var $r;
		var int3 = color >> 24 & 255;
		$r = int3 < 0?4294967296.0 + int3:int3 + 0.0;
		return $r;
	}(this)) / (function($this) {
		var $r;
		var int4 = 255;
		$r = int4 < 0?4294967296.0 + int4:int4 + 0.0;
		return $r;
	}(this))).toFixed(4) + ")";
};
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.nmeLoadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
};
flash.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.data.getUint8(bytes.position++) == 137 && bytes.data.getUint8(bytes.position++) == 80 && bytes.data.getUint8(bytes.position++) == 78 && bytes.data.getUint8(bytes.position++) == 71 && bytes.data.getUint8(bytes.position++) == 13 && bytes.data.getUint8(bytes.position++) == 10 && bytes.data.getUint8(bytes.position++) == 26 && bytes.data.getUint8(bytes.position++) == 10;
};
flash.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	return bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 216;
};
flash.display.BitmapData.prototype = {
	fillRect: function(area,color) {
		if(area == null || area.width <= 0 || area.height <= 0) return;
		if(area.equals(this.rect) && this.qTransparent && (function($this) {
			var $r;
			var $int = color & -16777216;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) == 0) {
			this.component.width = this.component.width;
			return;
		}
		if(!this.qTransparent) color = color | -16777216; else if((function($this) {
			var $r;
			var int1 = color & -16777216;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)) != -16777216) this.qContext.clearRect(area.x,area.y,area.width,area.height);
		if((function($this) {
			var $r;
			var int2 = color & -16777216;
			$r = int2 < 0?4294967296.0 + int2:int2 + 0.0;
			return $r;
		}(this)) != 0) {
			this.qContext.fillStyle = flash.display.BitmapData.makeColor(color);
			this.qContext.fillRect(area.x,area.y,area.width,area.height);
		}
		this.qSync |= 5;
	}
	,clone: function() {
		this.syncCanvas();
		var r = new flash.display.BitmapData(this.component.width,this.component.height,this.qTransparent,0);
		r.qContext.drawImage(this.component,0,0);
		r.qSync |= 5;
		return r;
	}
	,dispose: function() {
		this.component.width = this.component.height = 1;
		this.qImageData = null;
		this.qSync = 5;
	}
	,handle: function() {
		this.syncCanvas();
		if((this.qSync & 4) != 0) {
			this.qTick++;
			this.qTime = new Date().getTime();
			this.qSync &= -5;
		}
		return this.component;
	}
	,getTime: function() {
		return this.qTime;
	}
	,getTick: function() {
		return this.qTick;
	}
	,drawToSurface: function(cnv,ctx,matrix,ctr,blendMode,clipRect,smoothing) {
		ctx.save();
		if(smoothing != null && ctx.imageSmoothingEnabled != smoothing) flash.display.BitmapData.setSmoothing(ctx,smoothing);
		if(matrix != null) {
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		}
		ctx.drawImage(this.handle(),0,0);
		ctx.restore();
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		this.syncCanvas();
		if(alphaBitmapData != null) throw "alphaBitmapData is not supported yet.";
		var bit = sourceBitmapData.handle();
		var bw;
		var bh;
		var tw = this.component.width;
		var th = this.component.height;
		if(bit == null || (bw = bit.width) <= 0 || (bh = bit.height) <= 0) return;
		var dx = ~(~destPoint.x);
		var dy = ~(~destPoint.y);
		var sx;
		var sy;
		var sw;
		var sh;
		if(sourceRect != null) {
			sx = sourceRect.x;
			sy = sourceRect.y;
			sw = sourceRect.width;
			sh = sourceRect.height;
			if(sx < 0) {
				sw += sx;
				sx = 0;
			}
			if(sy < 0) {
				sh += sy;
				sy = 0;
			}
			if(sx + sw > bw) sw = bw - sx;
			if(sy + sh > bh) sh = bh - sy;
		} else {
			sx = sy = 0;
			sw = bw;
			sh = bh;
		}
		if(dx < 0) {
			sw += dx;
			sx -= dx;
			dx = 0;
		}
		if(dy < 0) {
			sh += dy;
			sy -= dy;
			dy = 0;
		}
		if(dx + sw > tw) sw = tw - dx;
		if(dy + sh > th) sh = th - dy;
		if(sw <= 0 || sh <= 0) return;
		if(this.qTransparent && !mergeAlpha) this.qContext.clearRect(dx,dy,sw,sh);
		this.qContext.drawImage(bit,sx,sy,sw,sh,dx,dy,sw,sh);
		this.qSync |= 5;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		this.syncCanvas();
		var a = 0;
		this.qContext.save();
		if(colorTransform != null) {
			a = colorTransform.alphaMultiplier;
			colorTransform.alphaMultiplier = 1;
			this.qContext.globalAlpha *= a;
		}
		if(clipRect != null) {
			this.qContext.beginPath();
			this.qContext.rect(clipRect.x,clipRect.y,clipRect.width,clipRect.height);
			this.qContext.clip();
			this.qContext.beginPath();
		}
		if(smoothing != null) flash.display.BitmapData.setSmoothing(this.qContext,smoothing);
		source.drawToSurface(this.handle(),this.qContext,matrix,colorTransform,blendMode,clipRect,null);
		this.qContext.restore();
		if(colorTransform != null) colorTransform.alphaMultiplier = a;
		this.qSync |= 5;
	}
	,lock: function() {
		this.syncData();
	}
	,unlock: function() {
		this.syncCanvas();
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return 0;
		if((this.qSync & 3) == 1) {
			var d = this.qContext.getImageData(x,y,1,1).data;
			return d[0] << 16 | d[1] << 8 | d[2];
		} else {
			var o = y * this.component.width + x << 2;
			return this.qImageData.data[o] << 16 | this.qImageData.data[o + 1] << 8 | this.qImageData.data[o + 2];
		}
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return 0;
		if((this.qSync & 3) == 1) {
			var d = this.qContext.getImageData(x,y,1,1).data;
			return (this.qTransparent?d[3] << 24:-16777216) | d[0] << 16 | d[1] << 8 | d[2];
		} else {
			var o = y * this.component.width + x << 2;
			return (this.qTransparent?this.qImageData.data[o + 3] << 24:-16777216) | this.qImageData.data[o] << 16 | this.qImageData.data[o + 1] << 8 | this.qImageData.data[o + 2];
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return;
		if((this.qSync & 3) != 2) {
			this.qPixel.data[0] = color >>> 16 & 255;
			this.qPixel.data[1] = color >>> 8 & 255;
			this.qPixel.data[2] = color & 255;
			this.qPixel.data[3] = 255;
			this.qContext.putImageData(this.qPixel,x,y);
			this.qSync |= 5;
		} else {
			var o = y * this.component.width + x << 2;
			this.qImageData.data[o] = color >>> 16 & 255;
			this.qImageData.data[o + 1] = color >>> 8 & 255;
			this.qImageData.data[o + 2] = color & 255;
			this.qImageData.data[o + 3] = 255;
			this.qSync |= 6;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= this.component.width || y >= this.component.height) return;
		if((this.qSync & 3) != 2) {
			this.qPixel.data[0] = color >>> 16 & 255;
			this.qPixel.data[1] = color >>> 8 & 255;
			this.qPixel.data[2] = color & 255;
			this.qPixel.data[3] = color >>> 24 & 255;
			this.qContext.putImageData(this.qPixel,x,y);
			this.qSync |= 5;
		} else {
			var o = y * this.component.width + x << 2;
			this.qImageData.data[o] = color >>> 16 & 255;
			this.qImageData.data[o + 1] = color >>> 8 & 255;
			this.qImageData.data[o + 2] = color & 255;
			this.qImageData.data[o + 3] = color >>> 24 & 255;
			this.qSync |= 6;
		}
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		this.syncData();
		var data = this.qImageData.data;
		var minX = this.component.width;
		var minY = this.component.height;
		var maxX = 0;
		var maxY = 0;
		var len = data.length;
		var i;
		var px;
		var x;
		var y;
		i = 0;
		while(i < len) {
			px = (this.qTransparent?data[i + 3] << 24:-16777216) | (data[i] & 255) << 16 | (data[i + 1] & 255) << 8 | data[i + 2] & 255;
			if(px == color == findColor) {
				x = Math.floor((i >> 2) % this.component.width);
				y = Math.floor((i >> 2) / this.component.width);
				if(x < minX) minX = x;
				if(x > maxX) maxX = x;
				if(y < minY) minY = y;
				if(y > maxY) maxY = y;
			}
			i += 4;
		}
		if(minX <= maxX && minY <= maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY + 1);
		if(!findColor) return new flash.geom.Rectangle(0,0,this.component.width,this.component.height);
		return new flash.geom.Rectangle(0,0,0,0);
	}
	,floodFill: function(fx,fy,fc) {
		var wasCanvas = (this.qSync & 3) == 1;
		this.lock();
		var q = [fx | fy << 16];
		var c = 1;
		var d = this.qImageData.data;
		var zr;
		var zg;
		var zb;
		var za;
		var fr;
		var fg;
		var fb;
		var fa;
		var x;
		var y;
		var p;
		var o = [];
		var r;
		var w = this.component.width;
		var h = this.component.height;
		p = fy * this.component.width + fx << 4;
		zr = d[p];
		zg = d[p + 1];
		zb = d[p + 2];
		za = d[p + 3];
		fa = fc >>> 24;
		fr = fc >> 16 & 255;
		fg = fc >> 8 & 255;
		fb = fc & 255;
		y = -1;
		while(++y < h) {
			o.push(r = []);
			x = 0;
			while(x < w) {
				r.push(0);
				x += 32;
			}
		}
		while(c > 0) {
			p = q[--c];
			x = p & 65535;
			y = p >>> 16;
			if(x < 0 || y < 0 || x >= w || y >= h) continue;
			if((o[y][x >> 5] >> (x & 31) & 1) != 0) continue;
			o[y][x >> 5] |= 1 << (x & 31);
			p = y * this.component.width + x << 2;
			if(d[p] == zr && d[p + 1] == zg && d[p + 2] == zb && d[p + 3] == za) {
				d[p] = fr;
				d[p + 1] = fg;
				d[p + 2] = fb;
				d[p + 3] = fa;
				if((p = x + 1) < w && (o[y][p >> 5] >> (p & 31) & 1) == 0) q[c++] = y << 16 | p;
				if(x > 0 && (o[y][(p = x - 1) >> 5] >> (p & 31) & 1) == 0) q[c++] = y << 16 | p;
				if((p = y + 1) < h && (o[p][x >> 5] >> (x & 31) & 1) == 0) q[c++] = p << 16 | x;
				if(y > 0 && (o[p = y - 1][x >> 5] >> (x & 31) & 1) == 0) q[c++] = p << 16 | x;
			}
		}
		this.qSync |= 6;
		if(wasCanvas) this.unlock();
	}
	,colorTransform: function(q,o) {
		var x = ~(~q.x);
		var y = ~(~q.y);
		var w = ~(~q.width);
		var h = ~(~q.height);
		var tw = this.component.width;
		var th = this.component.height;
		var f = this.qContext.globalCompositeOperation;
		var a = this.qContext.globalAlpha;
		if(x < 0) {
			w += x;
			x = 0;
		}
		if(y < 0) {
			h += y;
			y = 0;
		}
		if(x + w > tw) w = tw - x;
		if(y + h > th) h = th - y;
		if(w <= 0 || h <= 0) return;
		if(o.isAlphaMultiplier()) {
			this.syncCanvas();
			this.qContext.globalCompositeOperation = "copy";
			this.qContext.globalAlpha *= o.alphaMultiplier;
			this.qContext.drawImage(this.component,x,y,w,h,x,y,w,h);
			this.qSync |= 5;
		} else if(o.isColorSetter()) {
			var s = this.qContext.fillStyle;
			if(o.alphaMultiplier != 0) {
				this.qContext.globalCompositeOperation = "source-in";
				this.qContext.fillStyle = "rgb(" + ~(~o.redOffset) + "," + ~(~o.greenOffset) + "," + ~(~o.blueOffset) + ")";
				this.qContext.fillRect(x,y,w,h);
				this.qContext.globalCompositeOperation = "copy";
				this.qContext.globalAlpha = o.alphaMultiplier;
				this.qContext.drawImage(this.component,x,y,w,h,x,y,w,h);
			} else {
				this.qContext.globalCompositeOperation = "copy";
				this.qContext.fillStyle = "rgba(" + ~(~o.redOffset) + "," + ~(~o.greenOffset) + "," + ~(~o.blueOffset) + "," + ~(~o.alphaOffset) + ")";
				this.qContext.fillRect(x,y,w,h);
			}
			this.qContext.fillStyle = s;
		} else {
			var wasCanvas = (this.qSync & 3) != 2;
			this.lock();
			var d = this.qImageData.data;
			var c = tw * th * 4;
			var i = c;
			var v;
			var rm = o.redMultiplier;
			var gm = o.greenMultiplier;
			var bm = o.blueMultiplier;
			var am = o.alphaMultiplier;
			var ro = o.redOffset;
			var go = o.greenOffset;
			var bo = o.blueOffset;
			var ao = o.alphaOffset;
			if(x == 0 && y == 0 && w == tw && h == th) while((i -= 4) >= 0) {
				if((v = d[i + 3]) > 0) if((v = v * am + ao) < 0) d[i + 3] = 0; else if(v > 255) d[i + 3] = 255; else d[i + 3] = ~(~v);
				if((v = d[i + 2] * bm + bo) < 0) d[i + 2] = 0; else if(v > 255) d[i + 2] = 255; else d[i + 2] = ~(~v);
				if((v = d[i + 1] * gm + go) < 0) d[i + 1] = 0; else if(v > 255) d[i + 1] = 255; else d[i + 1] = ~(~v);
				if((v = d[i] * rm + ro) < 0) d[i] = 0; else if(v > 255) d[i] = 255; else d[i] = ~(~v);
			} else {
				var px;
				var py = y - 1;
				var pb = y + h;
				var pr;
				while(++py < pb) {
					i = tw * py + x - 1 << 2;
					pr = i + w * 4;
					while((i += 4) < pr) {
						if((v = d[i + 3]) > 0) if((v = v * am + ao) < 0) d[i + 3] = 0; else if(v > 255) d[i + 3] = 255; else d[i + 3] = ~(~v);
						if((v = d[i + 2] * bm + bo) < 0) d[i + 2] = 0; else if(v > 255) d[i + 2] = 255; else d[i + 2] = ~(~v);
						if((v = d[i + 1] * gm + go) < 0) d[i + 1] = 0; else if(v > 255) d[i + 1] = 255; else d[i + 1] = ~(~v);
						if((v = d[i] * rm + ro) < 0) d[i] = 0; else if(v > 255) d[i] = 255; else d[i] = ~(~v);
					}
				}
			}
			this.qSync |= 6;
			if(wasCanvas) this.unlock();
		}
		this.qContext.globalCompositeOperation = f;
		this.qContext.globalAlpha = a;
	}
	,copyChannel: function(o,q,p,sourceChannel,destChannel) {
		var x = ~(~o.x);
		var px = ~(~p.x);
		var y = ~(~o.y);
		var py = ~(~p.y);
		var w = ~(~q.width);
		var h = ~(~q.height);
		var sw = o.component.width;
		var sh = o.component.height;
		var tw = this.component.width;
		var th = this.component.height;
		var i;
		var j;
		var u;
		var v;
		var c;
		var sc = sourceChannel;
		var dc = destChannel;
		if(px < 0) {
			w += px;
			px = 0;
		}
		if(py < 0) {
			h += py;
			py = 0;
		}
		if(x < 0) {
			w += x;
			x = 0;
		}
		if(y < 0) {
			h += y;
			y = 0;
		}
		if(x + w > sw) w = sw - x;
		if(y + h > sh) h = sh - y;
		if(px + w > tw) w = tw - px;
		if(py + h > th) h = th - py;
		if(w <= 0 || h <= 0) return;
		if(sc == 8 && dc == 8) {
			var f = this.qContext.globalCompositeOperation;
			var s = this.qContext.fillStyle;
			this.qContext.globalCompositeOperation = "darker";
			i = 0;
			while(i++ < 8) this.qContext.drawImage(this.component,px,py,w,h,px,py,w,h);
			this.qContext.globalCompositeOperation = "destination-over";
			this.qContext.fillStyle = "black";
			this.qContext.fillRect(x,y,w,h);
			this.qContext.globalCompositeOperation = "destination-atop";
			this.qContext.drawImage(o.handle(),x,y,w,h,px,py,w,h);
			this.qContext.globalCompositeOperation = f;
			this.qContext.fillStyle = s;
		} else {
			var wasCanvas = (this.qSync & 3) != 2;
			var ds;
			var dd;
			this.lock();
			dd = this.qImageData.data;
			o.lock();
			ds = o.qImageData.data;
			if(sc == 8) sc = 3; else if(sc == 4) sc = 2; else if(sc == 2) sc = 1; else if(sc == 1) sc = 0; else sc = -1;
			if(dc == 8) dc = 3; else if(dc == 4) dc = 2; else if(dc == 2) dc = 1; else if(dc == 1) dc = 0; else dc = -1;
			if(sc < 0 || dc < 0) return;
			j = py + h;
			v = y + h;
			while(--v >= y) {
				--j;
				c = w;
				i = (px + tw * j) * 4 + dc;
				u = (x + sw * v) * 4 + sc;
				while(c-- > 0) {
					dd[u] = ds[i];
					i += 4;
					u += 4;
				}
			}
			this.qSync |= 6;
			if(wasCanvas) this.unlock();
		}
	}
	,noise: function(q,l,h,c,m) {
		if(m == null) m = false;
		if(c == null) c = 7;
		if(h == null) h = 255;
		if(l == null) l = 0;
		var wasCanvas = (this.qSync & 3) != 2;
		var i = 0;
		var n;
		var p;
		var d = h - l + 1;
		var z = q;
		var r = (c & 1) > 0;
		var g = (c & 2) > 0;
		var b = (c & 4) > 0;
		var a = (c & 8) > 0;
		this.lock();
		p = this.qImageData.data;
		n = p.length;
		while(i < n) {
			if(m) {
				p[i] = p[i + 1] = p[i + 2] = l + (z = z * 1687 % 2147483647) % d;
				i += 3;
			} else {
				if(r) p[i++] = l + (z = z * 1687 % 2147483647) % d; else p[i++] = 0;
				if(g) p[i++] = l + (z = z * 1687 % 2147483647) % d; else p[i++] = 0;
				if(b) p[i++] = l + (z = z * 1687 % 2147483647) % d; else p[i++] = 0;
			}
			if(a) p[i++] = l + (z = z * 1687 % 2147483647) % d; else p[i++] = 255;
		}
		this.qSync |= 6;
		if(wasCanvas) this.unlock();
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
	}
	,jeashOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		if(data.inLoader != null) {
			var e1 = new flash.events.Event("complete");
			e1.set_target(data.inLoader);
			data.inLoader.dispatchEvent(e1);
		}
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = window.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.component, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.jeashOnLoad),data),false);
			image.addEventListener("error",function(e1) {
				if(!image.complete) _g.jeashOnLoad(data,e1);
			},false);
		}
		image.src = inFilename;
	}
	,syncCanvas: function() {
		if(!((this.qSync & 3) != 2)) {
			this.qContext.putImageData(this.qImageData,0,0);
			this.qSync = this.qSync & -4;
		}
	}
	,syncData: function() {
		if(!((this.qSync & 3) != 1)) {
			this.qImageData = this.qContext.getImageData(0,0,this.component.width,this.component.height);
			this.qSync = this.qSync & -4;
		}
	}
	,nmeLoadFromBytes: function(c,a,h) {
		var _g = this;
		var t;
		var o = document.createElement("img");
		var n = this.component;
		var q;
		var f = null;
		var i;
		var l;
		var p;
		if(!(function($this) {
			var $r;
			var v;
			v = flash.display.BitmapData.nmeIsPNG(c)?t = "png":flash.display.BitmapData.nmeIsJPG(c)?t = "jpeg":t = "";
			$r = v;
			return $r;
		}(this))) throw new flash.errors.IOError("BitmapData can only load from ByteArrays with PNG/JPEG data.");
		f = function(_) {
			o.removeEventListener("load",f);
			_g.rect.width = n.width = o.width;
			_g.rect.height = n.height = o.height;
			q = _g.qContext = n.getContext("2d");
			q.drawImage(o,0,0);
			if(a != null) {
				i = -1;
				l = a.length;
				p = q.getImageData(0,0,o.width,o.height);
				while(++i < l) p.data[(i << 2) + 3] = a.data.getUint8(a.position++);
				q.putImageData(p,0,0);
			}
			if(h != null) h(_g);
		};
		o.addEventListener("load",f);
		o.src = "data:image/" + t + ";base64," + c.toBase64();
	}
	,__class__: flash.display.BitmapData
};
flash.display.BitmapDataChannel = function() { };
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",0];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display._CapsStyle = {};
flash.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["flash.display._CapsStyle.CapsStyle_Impl_"] = flash.display._CapsStyle.CapsStyle_Impl_;
flash.display._CapsStyle.CapsStyle_Impl_.__name__ = ["flash","display","_CapsStyle","CapsStyle_Impl_"];
flash.display._CapsStyle.CapsStyle_Impl_._new = function(s) {
	return s;
};
flash.display._CapsStyle.CapsStyle_Impl_.toString = function(this1) {
	return this1;
};
flash.display._CapsStyle.CapsStyle_Impl_.fromString = function(s) {
	return s;
};
flash.display.Graphics = function() {
	this.rgPending = false;
	this.synced = true;
	this.component = flash.Lib.jsCanvas();
	this.context = this.component.getContext("2d");
	this.context.save();
	this.bounds = new flash.geom.Rectangle();
	this.resetBounds();
	this.rec = [];
	this.lineWidth = this.len = 0;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.Graphics.prototype = {
	regenerate: function() {
		var o = this.component;
		var s = this.component.style;
		var q = this.context;
		var b = this.bounds;
		var bx = ~(~(b.x - 2));
		var by = ~(~(b.y - 2));
		var bw = Math.ceil(b.width + 4);
		var bh = Math.ceil(b.height + 4);
		this.synced = true;
		this.rgPending = false;
		if(b.width <= 0 || b.height <= 0) {
			o.width = o.height = 1;
			s.top = s.left = "0";
			return;
		}
		if(this.compX != bx || this.compY != by) {
			s.left = bx + "px";
			s.top = by + "px";
		}
		if(bw != o.width || bh != o.height) {
			o.width = bw;
			o.height = bh;
		} else q.clearRect(0,0,o.width,o.height);
		q.save();
		q.translate(-bx,-by);
		this.render(o,q);
		q.restore();
	}
	,set_displayObject: function(v) {
		if(this.displayObject != v) {
			this.displayObject = v;
			if(!this.synced) flash.Lib.schedule($bind(this,this.regenerate));
		}
		return v;
	}
	,resetBounds: function() {
		this.bounds.setVoid();
		this.invalidate();
	}
	,grab: function(x,y,r,b) {
		var i;
		if(x < (i = this.bounds.x)) {
			i = i - x;
			this.bounds.x -= i;
			this.bounds.width += i;
		}
		if(y < (i = this.bounds.y)) {
			i = i - y;
			this.bounds.y -= i;
			this.bounds.height += i;
		}
		if(r > (i = this.bounds.get_right())) this.bounds.width += r - i;
		if(b > (i = this.bounds.get_bottom())) this.bounds.height += b - i;
		this.invalidate();
	}
	,invalidate: function() {
		if(this.synced) {
			this.synced = false;
			if(!this.rgPending && this.displayObject != null && this.displayObject.get_stage() != null) {
				flash.Lib.schedule($bind(this,this.regenerate));
				this.rgPending = true;
			}
		}
	}
	,clear: function() {
		var i = 0;
		while(i < this.len) this.rec[i++] = 0;
		this.lineWidth = this.len = 0;
		this.resetBounds();
		this.invalidate();
	}
	,lineStyle: function(w,c,a,ph,sm,cs,js,ml) {
		this.rec[this.len++] = 1;
		this.rec[this.len++] = w > 0?this.lineWidth = w:this.lineWidth = 0;
		if(w > 0) {
			this.rec[this.len++] = flash.Lib.rgbf(c != null?c:0,a != null?a:1);
			if(cs == "none") this.rec[this.len++] = 2; else if(cs == "square") this.rec[this.len++] = 1; else this.rec[this.len++] = 0;
			if(js == "bevel") this.rec[this.len++] = 2; else if(js == "miter") this.rec[this.len++] = 1; else this.rec[this.len++] = 0;
		}
	}
	,beginFill: function(c,a) {
		if(a == null) a = 1;
		if(c == null) c = 0;
		this.rec[this.len++] = 2;
		this.rec[this.len++] = flash.Lib.rgbf(c,a);
	}
	,beginBitmapFill: function(bitmap,m,repeat,smooth) {
		this.rec[this.len++] = 3;
		this.rec[this.len++] = bitmap;
		if(repeat != null) this.rec[this.len++] = repeat; else this.rec[this.len++] = true;
		if((function($this) {
			var $r;
			var v = $this.rec[$this.len++] = m != null;
			$r = v;
			return $r;
		}(this))) {
			this.rec[this.len++] = m.a;
			this.rec[this.len++] = m.b;
			this.rec[this.len++] = m.c;
			this.rec[this.len++] = m.d;
			this.rec[this.len++] = m.tx;
			this.rec[this.len++] = m.ty;
		}
	}
	,endFill: function() {
		this.rec[this.len++] = 9;
		this.invalidate();
	}
	,moveTo: function(x,y) {
		this.rec[this.len++] = 10;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + r,y + r);
	}
	,lineTo: function(x,y) {
		this.rec[this.len++] = 11;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + r,y + r);
	}
	,curveTo: function(u,v,x,y) {
		this.rec[this.len++] = 0;
		this.rec[this.len++] = u;
		this.rec[this.len++] = v;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + r,y + r);
	}
	,drawRect: function(x,y,w,h) {
		this.rec[this.len++] = 13;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		this.rec[this.len++] = w;
		this.rec[this.len++] = h;
		var r = this.lineWidth / 2;
		this.grab(x - r,y - r,x + w + r,y + h + r);
	}
	,drawRoundRect: function(x,y,w,h,r,q) {
		this.rec[this.len++] = 15;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		this.rec[this.len++] = w;
		this.rec[this.len++] = h;
		this.rec[this.len++] = r;
		this.rec[this.len++] = q;
		var r1 = this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + w + r1,y + h + r1);
	}
	,drawCircle: function(x,y,r) {
		this.rec[this.len++] = 14;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		this.rec[this.len++] = r;
		var r1 = r;
		r1 += this.lineWidth / 2;
		this.grab(x - r1,y - r1,x + r1,y + r1);
	}
	,drawEllipse: function(x,y,w,h) {
		this.rec[this.len++] = 17;
		this.rec[this.len++] = x;
		this.rec[this.len++] = y;
		this.rec[this.len++] = w;
		this.rec[this.len++] = h;
		this.grab(x,y,x + w,y + h);
	}
	,rgba: function(c,a) {
		return "rgba(" + (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255) + ", " + a.toFixed(4) + ")";
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		ctx.save();
		if(mtx != null) ctx.transform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty);
		this.render(cnv,ctx);
		ctx.restore();
	}
	,_closePath: function(cnv,ctx,f,m,texture) {
		if(f & 1) {
			ctx.closePath();
			if(f & 4) {
				ctx.save();
				ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
				ctx.fillStyle = ctx.createPattern(texture,f & 8?"repeat":"no-repeat");
				ctx.fill();
				ctx.restore();
			} else ctx.fill();
		}
		if(f & 2) ctx.stroke();
		ctx.beginPath();
		return f;
	}
	,render: function(cnv,ctx) {
		var f = 0;
		var p = -1;
		var v;
		var m = this._drawMatrix;
		var n = 0;
		var tex = null;
		if(m == null) this._drawMatrix = m = new flash.geom.Matrix();
		try {
			while(++p < this.len) {
				var _g = v = this.rec[p];
				switch(_g) {
				case 0:
					throw "__break__";
					break;
				case 1:
					if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
					ctx.lineWidth = v = this.rec[++p];
					if(v > 0) {
						f |= 2;
						ctx.strokeStyle = this.rec[++p];
						if((v = this.rec[++p]) == 2) ctx.lineCap = "butt"; else if(v == 1) ctx.lineCap = "square"; else ctx.lineCap = "round";
						if((v = this.rec[++p]) == 2) ctx.lineJoin = "bevel"; else if(v == 1) ctx.lineJoin = "miter"; else ctx.lineJoin = "round";
					} else {
						f &= -3;
						ctx.strokeStyle = null;
					}
					break;
				case 2:case 3:
					if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
					f |= 1;
					if(v == 3) {
						tex = this.rec[++p].handle();
						var r = this.rec[++p];
						if(this.rec[++p]) {
							if(r) f |= 8; else f &= -9;
							m.a = this.rec[++p];
							m.b = this.rec[++p];
							m.c = this.rec[++p];
							m.d = this.rec[++p];
							m.tx = this.rec[++p];
							m.ty = this.rec[++p];
							f |= 4;
						} else {
							ctx.fillStyle = ctx.createPattern(tex,r?"repeat":"no-repeat");
							f &= -5;
						}
					} else {
						ctx.fillStyle = this.rec[++p];
						f &= -5;
					}
					n = 0;
					break;
				case 9:
					if(n > 0) {
						f = this._closePath(cnv,ctx,f,m,tex);
						n = 0;
					}
					break;
				case 10:
					ctx.moveTo(this.rec[++p],this.rec[++p]);
					n++;
					break;
				case 11:
					ctx.lineTo(this.rec[++p],this.rec[++p]);
					n++;
					break;
				case 0:
					ctx.quadraticCurveTo(this.rec[++p],this.rec[++p],this.rec[++p],this.rec[++p]);
					n++;
					break;
				case 13:
					var x = this.rec[++p];
					var y = this.rec[++p];
					var w = this.rec[++p];
					var h = this.rec[++p];
					ctx.rect(x,y,w,h);
					n++;
					break;
				case 14:
					var x1 = this.rec[++p];
					var y1 = this.rec[++p];
					var r1 = this.rec[++p];
					if(r1 < 0) r1 = -r1;
					if(r1 != 0) ctx.arc(x1,y1,r1,0,Math.PI * 2,true);
					n++;
					break;
				case 17:
					var x2 = this.rec[++p];
					var y2 = this.rec[++p];
					var w1 = this.rec[++p];
					var h1 = this.rec[++p];
					var x11 = x2 + w1 / 2;
					var y11 = y2 + h1 / 2;
					var x21 = x2 + w1;
					var y21 = y2 + h1;
					var m1 = 0.275892;
					var xm = w1 * m1;
					var ym = h1 * m1;
					ctx.moveTo(x11,y2);
					ctx.bezierCurveTo(x11 + xm,y2,x21,y11 - ym,x21,y11);
					ctx.bezierCurveTo(x21,y11 + ym,x11 + xm,y21,x11,y21);
					ctx.bezierCurveTo(x11 - xm,y21,x2,y11 + ym,x2,y11);
					ctx.bezierCurveTo(x2,y11 - ym,x11 - xm,y2,x11,y2);
					n++;
					break;
				case 15:
					var x3 = this.rec[++p];
					var y3 = this.rec[++p];
					var w2 = this.rec[++p];
					var h2 = this.rec[++p];
					var u = this.rec[++p];
					var q = this.rec[++p];
					if(q == null || $bind(ctx,ctx.quadraticCurveTo) == null) {
						ctx.moveTo(x3 + u,y3 + h2);
						ctx.arcTo(x3 + w2 - u,y3 + h2 - u,x3 + w2,y3 + h2 - u,u);
						ctx.arcTo(x3 + w2,y3 + u,x3 + w2 - u,y3,u);
						ctx.arcTo(x3 + u,y3,x3,y3 + u,u);
						ctx.arcTo(x3 + u,y3 + h2 - u,x3 + u,y3 + h2,u);
					} else {
						ctx.moveTo(x3 + u,y3 + h2);
						ctx.lineTo(x3 + w2 - u,y3 + h2);
						ctx.quadraticCurveTo(x3 + w2,y3 + h2,x3 + w2,y3 + h2 - q);
						ctx.lineTo(x3 + w2,y3 + q);
						ctx.quadraticCurveTo(x3 + w2,y3,x3 + w2 - u,y3);
						ctx.lineTo(x3 + u,y3);
						ctx.quadraticCurveTo(x3,y3,x3,y3 + q);
						ctx.lineTo(x3,y3 + h2 - q);
						ctx.quadraticCurveTo(x3,y3 + h2,x3 + u,y3 + h2);
					}
					n++;
					break;
				case 16:
					var tex1 = this.rec[++p];
					var d = tex1.handle();
					var fx = this.rec[++p];
					var fs = (fx & 1) != 0;
					var fr = (fx & 2) != 0;
					var fc = (fx & 4) != 0;
					var fa = (fx & 8) != 0;
					var fm = (fx & 16) != 0;
					var c = this.rec[++p] - 1;
					var tx;
					var ty;
					var ox;
					var oy;
					var rx;
					var ry;
					var rw;
					var rh;
					ctx.save();
					if((fx & 65536) != 0) ctx.globalCompositeOperation = "lighter"; else ctx.globalCompositeOperation = "source-over";
					while(p < c) {
						tx = this.rec[++p];
						ty = this.rec[++p];
						ox = this.rec[++p];
						oy = this.rec[++p];
						rx = this.rec[++p];
						ry = this.rec[++p];
						rw = this.rec[++p];
						rh = this.rec[++p];
						ctx.save();
						if(fm) ctx.transform(this.rec[++p],this.rec[++p],this.rec[++p],this.rec[++p],tx,ty); else {
							ctx.translate(tx,ty);
							if(fs) ctx.scale(v = this.rec[++p],v);
							if(fr) ctx.rotate(this.rec[++p]);
						}
						if(fc) p += 3;
						if(fa) ctx.globalAlpha = this.rec[++p];
						ctx.drawImage(d,rx,ry,rw,rh,-ox,-oy,rw,rh);
						ctx.restore();
					}
					ctx.restore();
					break;
				default:
					var v1 = "Unknown operation: " + Std.string(v);
					null;
					throw "__break__";
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(n > 0) f = this._closePath(cnv,ctx,f,m,tex);
	}
	,__class__: flash.display.Graphics
};
flash.display._JointStyle = {};
flash.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["flash.display._JointStyle.JointStyle_Impl_"] = flash.display._JointStyle.JointStyle_Impl_;
flash.display._JointStyle.JointStyle_Impl_.__name__ = ["flash","display","_JointStyle","JointStyle_Impl_"];
flash.display._JointStyle.JointStyle_Impl_._new = function(s) {
	return s;
};
flash.display._JointStyle.JointStyle_Impl_.toString = function(this1) {
	return this1;
};
flash.display._JointStyle.JointStyle_Impl_.fromString = function(s) {
	return s;
};
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	load: function(request,context) {
		var extension = "";
		var i;
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			throw "Unrecognized file " + request.url;
		}
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener("complete",$bind(this,this.handleLoad),false);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent("ioError");
			evt.set_currentTarget(this);
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener("complete",$bind(this,this.handleLoad),false);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event("complete");
				evt.set_currentTarget(_g);
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt1 = new flash.events.IOErrorEvent("ioError");
			evt1.set_currentTarget(this);
			this.contentLoaderInfo.dispatchEvent(evt1);
		}
	}
	,handleLoad: function(e) {
		e.set_currentTarget(this);
		this.contentLoaderInfo.removeEventListener("complete",$bind(this,this.handleLoad));
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(o) {
	var r = new flash.display.LoaderInfo();
	if(o != null) r.loader = o; else r.url = "";
	return r;
};
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.qIndex = this.qTotal = 0;
	this.loaderInfo = flash.display.LoaderInfo.create();
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	gotoAndPlay: function(v,o) {
	}
	,gotoAndStop: function(v,o) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.qIndex;
	}
	,get_framesLoaded: function() {
		return this.qTotal;
	}
	,get_totalFrames: function() {
		return this.qTotal;
	}
	,__class__: flash.display.MovieClip
});
flash.display.Shape = function() {
	(this.graphics = new flash.display.Graphics()).set_displayObject(this);
	this.component = this.graphics.component;
	flash.display.DisplayObject.call(this);
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		this.graphics.drawToSurface(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing);
	}
	,set_stage: function(v) {
		var z = this.get_stage() == null && v != null;
		var r = flash.display.DisplayObject.prototype.set_stage.call(this,v);
		if(z) this.graphics.invalidate();
		return r;
	}
	,__class__: flash.display.Shape
});
flash.display.Stage = function() {
	this.isTouchScreen = false;
	this.frameRate = 0;
	flash.display.DisplayObjectContainer.call(this);
	var s = this.component.style;
	s.position = "absolute";
	s.overflow = "hidden";
	s.width = s.height = "100%";
	this.qTimeStamp = flash.Lib.getTimer();
	flash.Lib.requestAnimationFrame($bind(this,this.onAnimationFrame));
	this.mousePos = new flash.geom.Point();
	var o = window;
	o.addEventListener("mousemove",$bind(this,this.onMouseMove));
	o.addEventListener("touchstart",$bind(this,this.onTouch));
	o.addEventListener("touchend",$bind(this,this.onTouch));
	o.addEventListener("touchmove",$bind(this,this.onTouch));
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	onTouch: function(e) {
		this.isTouchScreen = true;
		if(e.targetTouches.length > 0) {
			this.mousePos.x = e.targetTouches[0].pageX;
			this.mousePos.y = e.targetTouches[0].pageY;
		}
		e.preventDefault();
	}
	,onMouseMove: function(e) {
		if(!this.isTouchScreen) {
			this.mousePos.x = e.pageX;
			this.mousePos.y = e.pageY;
		}
	}
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		this.component = window;
		flash.display.DisplayObjectContainer.prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
		this.component = o;
	}
	,removeEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		this.component = window;
		flash.display.DisplayObjectContainer.prototype.removeEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
		this.component = o;
	}
	,get_focus: function() {
		var o = document.activeElement;
		if(o != null && Std["is"](o = o.node,flash.display.InteractiveObject)) return o; else return null;
	}
	,set_focus: function(v) {
		if(v != null) v.giveFocus(); else this.component.blur();
		return v;
	}
	,get_stageWidth: function() {
		return window.innerWidth;
	}
	,get_stageHeight: function() {
		return window.innerHeight;
	}
	,get_stage: function() {
		return this;
	}
	,onAnimationFrame: function() {
		var t = flash.Lib.getTimer();
		var i = -1;
		while(++i < flash.Lib.schLength) {
			flash.Lib.schList[i]();
			flash.Lib.schList[i] = null;
		}
		flash.Lib.schLength = 0;
		if(this.frameRate <= 0 || t - this.qTimeStamp >= 1000 / this.frameRate) {
			this.qTimeStamp = t;
			var e = new flash.events.Event("enterFrame");
			this.broadcastEvent(e);
		}
		flash.Lib.requestAnimationFrame($bind(this,this.onAnimationFrame));
	}
	,__class__: flash.display.Stage
});
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["FULL_SCREEN","FULL_SCREEN_INTERACTIVE","NORMAL"] };
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",1];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.NORMAL = ["NORMAL",2];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {};
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash.errors.Error
};
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	get_target: function() {
		return this._target || this.target;
	}
	,set_target: function(v) {
		return this._target = v;
	}
	,get_currentTarget: function() {
		return this._current || this.currentTarget;
	}
	,set_currentTarget: function(v) {
		return this._current = v;
	}
	,isDefaultPrevented: function() {
		return this.defaultPrevented;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
};
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text) {
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue) {

};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.MouseEvent = function(type,bubbles,cancelable,lx,ly,obj,ctrlKey,altKey,shiftKey,buttonDown,delta) {
	
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	get_buttonDown: function() {
		return this.button == 0;
	}
	,get_delta: function() {
		return this.wheelDelta;
	}
	,get_stageX: function() {
		return this.pageX;
	}
	,get_stageY: function() {
		return this.pageY;
	}
	,get_localPoint: function() {
		var p = flash.events.MouseEvent.convPoint;
		if(p == null) flash.events.MouseEvent.convPoint = p = new flash.geom.Point();
		p.x = this.pageX;
		p.y = this.pageY;
		if(this.relatedObject != null) return this.relatedObject.globalToLocal(p,p); else return p;
	}
	,get_localX: function() {
		return this.get_localPoint().x;
	}
	,get_localY: function() {
		return this.get_localPoint().y;
	}
	,updateAfterEvent: function() {
	}
	,__class__: flash.events.MouseEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.filters = {};
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,nmePreFilter: function(surface) {
	}
	,nmeApplyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__class__: flash.filters.BitmapFilter
};
flash.geom = {};
flash.geom.ColorTransform = function(r,g,b,a,ro,go,bo,ao) {
	if(ao == null) ao = 0;
	if(bo == null) bo = 0;
	if(go == null) go = 0;
	if(ro == null) ro = 0;
	if(a == null) a = 1;
	if(b == null) b = 1;
	if(g == null) g = 1;
	if(r == null) r = 1;
	this.redMultiplier = r;
	this.greenMultiplier = g;
	this.blueMultiplier = b;
	this.alphaMultiplier = a;
	this.redOffset = ro;
	this.greenOffset = go;
	this.blueOffset = bo;
	this.alphaOffset = ao;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	concat: function(o) {
		this.redMultiplier += o.redMultiplier;
		this.greenMultiplier += o.greenMultiplier;
		this.blueMultiplier += o.blueMultiplier;
		this.alphaMultiplier += o.alphaMultiplier;
	}
	,isColorSetter: function() {
		return this.redMultiplier == 0 && this.greenMultiplier == 0 && this.blueMultiplier == 0 && (this.alphaMultiplier == 0 || this.alphaOffset == 0);
	}
	,isAlphaMultiplier: function() {
		return this.redMultiplier == 1 && this.greenMultiplier == 1 && this.blueMultiplier == 1 && this.redOffset == 0 && this.greenOffset == 0 && this.blueOffset == 0 && this.alphaOffset == 0;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: flash.geom.ColorTransform
};
flash.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(a == null) this.a = 1; else this.a = a;
	if(b == null) this.b = 0; else this.b = b;
	if(c == null) this.c = 0; else this.c = c;
	if(d == null) this.d = 1; else this.d = d;
	if(tx == null) this.tx = 0; else this.tx = tx;
	if(ty == null) this.ty = 0; else this.ty = ty;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	clone: function() {
		return new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,identity: function() {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
	}
	,isIdentity: function() {
		return this.a == 1 && this.d == 1 && this.tx == 0 && this.ty == 0 && this.b == 0 && this.c == 0;
	}
	,copy: function(s) {
		this.a = s.a;
		this.b = s.b;
		this.c = s.c;
		this.d = s.d;
		this.tx = s.tx;
		this.ty = s.ty;
	}
	,invert: function() {
		var t;
		var n = this.a * this.d - this.b * this.c;
		if(n == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			n = 1 / n;
			t = this.d * n;
			this.d = this.a * n;
			this.a = t;
			this.b *= -n;
			this.c *= -n;
			t = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = t;
		}
	}
	,translate: function(x,y) {
		this.tx += x;
		this.ty += y;
	}
	,rotate: function(o) {
		var ox = Math.cos(o);
		var oy = Math.sin(o);
		var t;
		t = this.a * ox - this.b * oy;
		this.b = this.a * oy + this.b * ox;
		this.a = t;
		t = this.c * ox - this.d * oy;
		this.d = this.c * oy + this.d * ox;
		this.c = t;
		t = this.tx * ox - this.ty * oy;
		this.ty = this.tx * oy + this.ty * ox;
		this.tx = t;
	}
	,scale: function(x,y) {
		this.a *= x;
		this.b *= y;
		this.c *= x;
		this.d *= y;
		this.tx *= x;
		this.ty *= y;
	}
	,concat: function(o) {
		var t;
		t = this.a * o.a + this.b * o.c;
		this.b = this.a * o.b + this.b * o.d;
		this.a = t;
		t = this.c * o.a + this.d * o.c;
		this.d = this.c * o.b + this.d * o.d;
		this.c = t;
		t = this.tx * o.a + this.ty * o.c + o.tx;
		this.ty = this.tx * o.b + this.ty * o.d + o.ty;
		this.tx = t;
	}
	,transformPoint: function(o) {
		return new flash.geom.Point(o.x * this.a + o.y * this.c + this.tx,o.x * this.b + o.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,to3dString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,__class__: flash.geom.Matrix
};
flash.geom.Point = function(_x,_y) {
	if(_x == null) this.x = 0; else this.x = _x;
	if(_y == null) this.y = 0; else this.y = _y;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.interpolate = function(a,b,f) {
	return new flash.geom.Point(a.x + f * (b.x - a.x),a.y + f * (b.y - a.y));
};
flash.geom.Point.polar = function(l,d) {
	return new flash.geom.Point(Math.cos(d) * l,Math.sin(d) * l);
};
flash.geom.Point.prototype = {
	clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,equals: function(o) {
		return this.x == o.x && this.y == o.y;
	}
	,setTo: function(u,v) {
		this.x = u;
		this.y = v;
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,toString: function() {
		return "point(" + this.x + ", " + this.y + ")";
	}
	,normalize: function(l) {
		if(this.y == 0) if(this.x < 0) this.x = -l; else this.x = l; else if(this.x == 0) if(this.y < 0) this.y = -l; else this.y = l; else {
			var m = l / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= m;
			this.y *= m;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,add: function(o) {
		return new flash.geom.Point(this.x + o.x,this.y + o.y);
	}
	,subtract: function(o) {
		return new flash.geom.Point(this.x - o.x,this.y - o.y);
	}
	,__class__: flash.geom.Point
};
flash.geom.Rectangle = function(a,b,c,d) {
	if(d == null) d = 0;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 0;
	this.x = a;
	this.y = b;
	this.width = c;
	this.height = d;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,equals: function(o) {
		return this.x == o.x && this.y == o.y && this.width == o.width && this.height == o.height;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,copyFrom: function(o) {
		this.x = o.x;
		this.y = o.y;
		this.width = o.width;
		this.height = o.height;
	}
	,setTo: function(a,b,c,d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	}
	,setVoid: function() {
		this.width -= 2147483647 - this.x;
		this.x = 2147483647;
		this.width = -2147483648 - this.x;
		-2147483648;
		this.height -= 2147483647 - this.y;
		this.y = 2147483647;
		this.height = -2147483648 - this.y;
		-2147483648;
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(v) {
		this.width -= v - this.x;
		return this.x = v;
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(v) {
		this.height -= v - this.y;
		return this.y = v;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(v) {
		this.width = v - this.x;
		return v;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(v) {
		this.height = v - this.y;
		return v;
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_size: function(v) {
		this.width = v.x;
		this.height = v.y;
		return v.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(v) {
		this.width = v.x;
		this.height = v.y;
		return v.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(v) {
		this.width = v.x - this.x;
		this.height = v.y - this.y;
		return v.clone();
	}
	,contains: function(u,v) {
		return (u -= this.x) >= 0 && (v -= this.y) >= 0 && u < this.width && v < this.height;
	}
	,containsPoint: function(o) {
		return this.contains(o.x,o.y);
	}
	,containsRect: function(o) {
		if(o.width <= 0 || o.height <= 0) return o.x > this.x && o.y > this.y && o.x + o.width < this.x + this.width && o.y + o.height < this.y + this.height; else return o.x >= this.x && o.y >= this.y && o.x + o.width <= this.x + this.width && o.y + o.height <= this.y + this.height;
	}
	,intersection: function(o) {
		var x0;
		var x1;
		var y0;
		var y1;
		var a;
		var b;
		if(((a = this.x) < (b = o.x)?x0 = b:x0 = a) <= ((a += this.width) > (b += o.width)?x1 = b:x1 = a) && ((a = this.y) < (b = o.y)?y0 = b:y0 = a) <= ((a += this.height) > (b += o.height)?y1 = b:y1 = a)) return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0); else return new flash.geom.Rectangle();
	}
	,intersects: function(o) {
		var x0;
		var x1;
		var y0;
		var y1;
		if((this.x < (x0 = o.x)?x0 = x0:x0 = this.x) <= (this.x + this.width > (x1 = o.x + o.width)?x1 = x1:x1 = this.x + this.width)) return false; else return (this.y < (y0 = o.y)?y0 = y0:y0 = this.y) <= (this.y + this.height > (y1 = o.y + o.height)?y1 = y1:y1 = this.y);
	}
	,join: function(o) {
		var v;
		if((v = o.x - this.x) < 0) {
			this.x += v;
			this.width -= v;
		}
		if((v = o.y - this.y) < 0) {
			this.y += v;
			this.height -= v;
		}
		if((v = o.x + o.width - (this.x + this.width)) > 0) this.width += v;
		if((v = o.y + o.height - (this.y + this.height)) > 0) this.height += v;
	}
	,union: function(o) {
		var a;
		var b;
		var c;
		var d;
		return new flash.geom.Rectangle((a = this.x) < (c = o.x)?a:c,(b = this.y) < (d = o.y)?b:d,(a += this.width) > (c += o.width)?a:c,(b += this.height) > (d += o.height)?b:d);
	}
	,inflate: function(u,v) {
		this.x -= u;
		this.y -= v;
		this.width += u * 2;
		this.height += v * 2;
	}
	,inflatePoint: function(v) {
		this.inflate(v.x,v.y);
	}
	,offset: function(u,v) {
		this.x += u;
		this.y += v;
	}
	,offsetPoint: function(o) {
		this.x += o.x;
		this.y += o.y;
	}
	,transform: function(m) {
		var v;
		var l;
		var t;
		var r;
		var b;
		r = l = m.a * this.x + m.c * this.y;
		b = t = m.b * this.x + m.d * this.y;
		v = m.a * (this.x + this.width) + m.c * this.y;
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * (this.x + this.width) + m.d * this.y;
		if(v < t) t = v;
		if(v > b) b = v;
		v = m.a * this.x + m.c * (this.y + this.height);
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * this.x + m.d * (this.y + this.height);
		if(v < t) t = v;
		if(v > b) b = v;
		v = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		if(v < l) l = v;
		if(v > r) r = v;
		v = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(v < t) t = v;
		if(v > b) b = v;
		this.x = l + m.tx;
		this.width = r - l;
		this.y = t + m.ty;
		this.height = b - t;
	}
	,toString: function() {
		return "Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")";
	}
	,__class__: flash.geom.Rectangle
};
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) (m = new flash.geom.Matrix(localMatrix.a,localMatrix.b,localMatrix.c,localMatrix.d,localMatrix.tx,localMatrix.ty)).concat(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,get_concatenatedMatrix: function() {
		return this.nmeGetFullMatrix(this._matrix);
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.syncMtx();
		return this._matrix;
	}
	,get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,__class__: flash.geom.Transform
};
flash.media = {};
flash.media.Sound = function(stream,ctx) {
	flash.events.EventDispatcher.call(this);
	if(stream != null) this.load(stream,ctx);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.canPlayType = function(o) {
	var f;
	var v;
	o = o.toLowerCase();
	if(flash.media.Sound.canPlayMap != null) {
		if(flash.media.Sound.canPlayMap.exists(o)) return flash.media.Sound.canPlayMap.get(o);
	} else flash.media.Sound.canPlayMap = new haxe.ds.StringMap();
	f = flash.media.Sound.getFormatType(o);
	v = new Audio().canPlayType(f) != "no";
	flash.media.Sound.canPlayMap.set(o,v);
	return v;
};
flash.media.Sound.getFormatType = function(o) {
	if(o == "mp3") return "audio/mpeg;"; else if(o == "ogg") return "audio/ogg; codecs=\"vorbis\""; else return null;
};
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	close: function() {
		if(this.component != null) this.component = null; else throw new flash.errors.IOError("Attempt to close unexisting stream.");
	}
	,load: function(stream,ctx) {
		var s = stream.url;
		var m = flash.media.Sound.library;
		if(m != null && m.exists(s)) {
			this.component = m.get(s);
			var value = this.component.cloneNode(true);
			flash.media.Sound.library.set(s,value);
		} else this.component = new Audio(s);
		this.qCache = [];
	}
	,play: function(ofs,loops,stf) {
		if(loops == null) loops = 0;
		if(ofs == null) ofs = 0;
		var o;
		var i;
		if(this.qCache.length == 0) {
			(o = new flash.media.SoundChannel()).init(this,this.component,loops);
			this.component = this.component.cloneNode(true);
		} else {
			o = this.qCache[0];
			var _g = 0;
			var _g1 = this.qCache;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				if(v.component.currentTime * 1000 == ofs) {
					o = v;
					break;
				}
			}
			HxOverrides.remove(this.qCache,o);
		}
		o.set_soundTransform(stf);
		try {
			o._loops = loops;
			o.play(ofs);
		} catch( e ) {
			null;
		}
		return o;
	}
	,get_length: function() {
		if(this.component != null) return this.component.duration * 1000; else return 0;
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	this._loops = 1;
	this.active = false;
	this.rightPeak = 1;
	this.leftPeak = 1;
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	init: function(q,v,loops) {
		if(loops == null) loops = 1;
		this.qSound = q;
		this.component = v;
		this._loops = loops;
		this.component.addEventListener("ended",$bind(this,this.onEnded));
	}
	,play: function(p) {
		var o = this.component;
		var l;
		if(!this.active) {
			l = this.get_duration();
			if(p == 0 || p / 1000 <= l) {
				this._position = this.set_position(p);
				o.load();
				o.play();
				this.active = true;
			} else {
				this.set_position(0);
				o.load();
				o.play();
				o.pause();
				this.qSound.qCache.push(this);
			}
		}
	}
	,stop: function() {
		if(this.active) {
			this.active = false;
			this.component.pause();
			this.qSound.qCache.push(this);
		}
	}
	,set_soundTransform: function(v) {
		this.soundTransform = v;
		if(v != null) this.component.volume = v.volume; else this.component.volume = 1;
		return v;
	}
	,get_duration: function() {
		var o = this.component;
		var f;
		try {
			if(o.buffered != null) f = o.buffered.end(0); else f = o.duration;
		} catch( _ ) {
			f = o.duration;
			if(Math.isNaN(f)) f = 0;
		}
		return f;
	}
	,get_position: function() {
		return this.component.currentTime * 1000;
	}
	,set_position: function(v) {
		if(this.component.currentTime != v / 1000) {
			var p = !this.component.paused;
			if(p) this.component.pause();
			this.component.currentTime = v / 1000;
			if(p) this.component.play();
		}
		return v;
	}
	,onEnded: function(e) {
		if(this.active) {
			if(--this._loops > 0) {
				this.set_position(this._position);
				if(this.component.paused) this.component.play();
			} else {
				this.stop();
				this.component.currentTime = 0;
				this.dispatchEvent(new flash.events.Event("soundComplete"));
			}
		}
	}
	,__class__: flash.media.SoundChannel
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
};
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
};
flash.net = {};
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(v) {
		if(v == flash.net.URLLoaderDataFormat.BINARY && ArrayBuffer == null) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = v;
		return this.dataFormat;
	}
	,close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState == 4) {
				var s;
				try {
					s = subject.status;
				} catch( _ ) {
					s = null;
				}
				if(s != null) self.onStatus(s);
				if(s == null) self.onError("Failed to connect or resolve host"); 
					else if(s >= 200 && s < 400) self.onData(subject.response); 
					else if(s == 29) self.onError("Failed to connect to host"); 
					else if(s == 7) self.onError("Unknown host"); 
					else if(s == 0) {
					self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
					self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
				} else self.onError("Http Error #" + subject.status);
			}
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			if(this.dataFormat == flash.net.URLLoaderDataFormat.BINARY) uri = data1.data.buffer; else uri = data1.readUTFBytes(data1.length);
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data2 = data;
			var _g = 0;
			var _g1 = Reflect.fields(data2);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		if(this.dataFormat == flash.net.URLLoaderDataFormat.BINARY) xmlHttpRequest.responseType = "arraybuffer";
		var _g2 = 0;
		while(_g2 < requestHeaders.length) {
			var header = requestHeaders[_g2];
			++_g2;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
	}
	,onData: function(_) {
		var v;
		if(_) v = _; else v = this.getData();
		var e;
		if(this.dataFormat == flash.net.URLLoaderDataFormat.BINARY) this.data = flash.utils.ByteArray.nmeOfBuffer(v); else this.data = Std.string(v);
		e = new flash.events.Event("complete");
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onError: function(msg) {
		var e = new flash.events.IOErrorEvent("ioError");
		e.text = msg;
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onOpen: function() {
		var e = new flash.events.Event("open");
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,onProgress: function(event) {
		var e = new flash.events.ProgressEvent("progress");
		e.set_currentTarget(this);
		e.bytesLoaded = event.loaded;
		e.bytesTotal = event.total;
		this.dispatchEvent(e);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent("securityError");
		evt.text = msg;
		evt.set_currentTarget(this);
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var e = new flash.events.HTTPStatusEvent("httpStatus",false,false,status);
		e.set_currentTarget(this);
		this.dispatchEvent(e);
	}
	,__class__: flash.net.URLLoader
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == "GET" || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) (res = res.slice()).push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		return res;
	}
	,__class__: flash.net.URLRequest
};
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
};
flash.net._URLRequestMethod = {};
flash.net._URLRequestMethod.URLRequestMethod_Impl_ = function() { };
$hxClasses["flash.net._URLRequestMethod.URLRequestMethod_Impl_"] = flash.net._URLRequestMethod.URLRequestMethod_Impl_;
flash.net._URLRequestMethod.URLRequestMethod_Impl_.__name__ = ["flash","net","_URLRequestMethod","URLRequestMethod_Impl_"];
flash.net._URLRequestMethod.URLRequestMethod_Impl_._new = function(o) {
	return o;
};
flash.net._URLRequestMethod.URLRequestMethod_Impl_.toString = function(this1) {
	return this1;
};
flash.net._URLRequestMethod.URLRequestMethod_Impl_.fromString = function(s) {
	return s;
};
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var r = "";
		var o = Reflect.fields(this);
		var i = 0;
		var _g = 0;
		while(_g < o.length) {
			var f = o[_g];
			++_g;
			r += (i++ != 0?"&":"") + encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f));
		}
		return r;
	}
	,__class__: flash.net.URLVariables
};
flash.text = {};
flash.text.AntiAliasType = $hxClasses["flash.text.AntiAliasType"] = { __ename__ : true, __constructs__ : ["ADVANCED","NORMAL"] };
flash.text.AntiAliasType.ADVANCED = ["ADVANCED",0];
flash.text.AntiAliasType.ADVANCED.toString = $estr;
flash.text.AntiAliasType.ADVANCED.__enum__ = flash.text.AntiAliasType;
flash.text.AntiAliasType.NORMAL = ["NORMAL",1];
flash.text.AntiAliasType.NORMAL.toString = $estr;
flash.text.AntiAliasType.NORMAL.__enum__ = flash.text.AntiAliasType;
flash.text.Font = function() {
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(z) {
	if(z == null) z = false;
	return [];
};
flash.text.Font.registerFont = function(v) {
};
flash.text.Font.prototype = {
	hasGlyphs: function(v) {
		return false;
	}
	,__class__: flash.text.Font
};
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] };
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.TextField = function() {
	this.qText = "";
	this.type = "DYNAMIC";
	this.maxChars = 0;
	flash.display.InteractiveObject.call(this);
	var s = this.component.style;
	s.whiteSpace = "nowrap";
	s.overflow = "hidden";
	this.defaultTextFormat = new flash.text.TextFormat("_serif",16,0);
	this.textColor = 0;
	this.wordWrap = this.qEditable = false;
	this.set_width(this.set_height(100));
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__interfaces__ = [flash.display.IBitmapDrawable];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	setTextFormat: function(v,f,l) {
	}
	,get_text: function() {
		if(this.qEditable) return this.qTextArea.value; else return this.qText;
	}
	,set_text: function(v) {
		if(this.get_text() != v) {
			var o;
			var q = this.defaultTextFormat;
			var z = this.qEditable;
			this.qText = v;
			if(z) this.qTextArea.value = v; else if(this.component.innerText == null) this.component.innerHTML = StringTools.replace(StringTools.htmlEscape(v),"\n","<br>"); else this.component.innerText = v;
			o = (z?this.qTextArea:this.component).style;
			this.qFontStyle = o.font = q.get_fontStyle();
			o.lineHeight = (this.qLineHeight = q.size * 1.25 | 0) + "px";
			o.color = flash.Lib.rgbf(q.color != null?q.color:this.textColor,1);
		}
		return v;
	}
	,appendText: function(v) {
	}
	,setSelection: function(v,o) {
		if(this.qEditable) this.qTextArea.setSelectionRange(v,o);
	}
	,drawToSurface: function(cnv,ctx,mtx,ctr,blendMode,clipRect,smoothing) {
		var q = this.defaultTextFormat;
		ctx.save();
		ctx.fillStyle = this.component.style.color;
		ctx.font = this.qFontStyle;
		ctx.textBaseline = "top";
		ctx.textAlign = "left";
		ctx.fillText(this.get_text(),0,0);
		ctx.restore();
	}
	,get_width: function() {
		if(this.qWidth != null) return this.qWidth; else return this.get_textWidth();
	}
	,get_height: function() {
		if(this.qHeight != null) return this.qHeight; else return this.get_textHeight();
	}
	,set_width: function(v) {
		if(this.qWidth != v) {
			var o;
			if(v != null) o = v + "px"; else o = "";
			this.component.style.width = o;
			if(this.qEditable) this.qTextArea.style.width = o;
			this.qWidth = v;
		}
		return v;
	}
	,set_height: function(v) {
		if(this.qHeight != v) {
			var o;
			if(v != null) o = v + "px"; else o = "";
			this.component.style.height = o;
			if(this.qEditable) this.qTextArea.style.height = o;
			this.qHeight = v;
		}
		return v;
	}
	,_measure_pre: function() {
		var o = flash.Lib.jsHelper();
		var s = o.style;
		var q = this.component.style;
		var i;
		i = q.length;
		while(--i >= 0) s[q[i]] = q[q[i]];
		o.innerHTML = this.component.innerHTML;
		return o;
	}
	,_measure_post: function(o) {
		var i;
		var s = o.style;
		i = s.length;
		while(--i >= 0) s[s[i]] = "";
		o.innerHTML = "";
	}
	,get_textWidth: function() {
		if(this.get_stage() == null) {
			var o = this._measure_pre();
			var r = o.clientWidth;
			this._measure_post(o);
			return r;
		}
		return this.component.clientWidth;
	}
	,get_textHeight: function() {
		if(this.get_stage() == null) {
			var o = this._measure_pre();
			var r = o.clientHeight;
			this._measure_post(o);
			return r;
		}
		return this.component.clientHeight;
	}
	,set_autoSize: function(v) {
		if(this.autoSize != v) {
			if((this.autoSize = v) != "NONE") this.set_width(this.set_height(null));
		}
		return v;
	}
	,set_type: function(v) {
		var z = v == "INPUT";
		var o = this;
		var c;
		var e;
		var q;
		var t;
		var text;
		var f;
		if(z != o.qEditable) {
			c = o.component;
			text = o.get_text();
			o.set_text(text != ""?"":" ");
			if(o.qEditable = z) {
				c.appendChild(e = document.createElement(this.multiline?"textarea":"input"));
				e.value = text + " ";
				if((t = this.maxChars) > 0) e.maxLength = t; else e.maxLength = 2147483647;
				t = e.style;
				t.border = "0";
				t.background = "transparent";
				if((f = o.qWidth) != null) t.width = f + "px";
				if((f = o.qHeight) != null) t.height = f + "px";
				o.qTextArea = e;
			} else {
				c.removeChild(o.qTextArea);
				o.qTextArea = null;
			}
			o.set_text(text);
		}
		return v;
	}
	,set_multiline: function(v) {
		if(this.multiline != v) {
			this.multiline = v;
			if(this.qEditable) {
				this.set_type("DYNAMIC");
				this.set_type("INPUT");
			}
		}
		return v;
	}
	,set_maxChars: function(v) {
		if(this.maxChars != v) {
			this.maxChars = v;
			if(this.qEditable) if(v > 0) this.qTextArea.maxLength = v; else this.qTextArea.maxLength = 2147483647;
		}
		return v;
	}
	,set_selectable: function(v) {
		if(this.selectable != v) {
			var s = this.component.style;
			var q;
			if(this.selectable = v) q = null; else q = "none";
			var u = "user-select";
			var z = null;
			s.setProperty("-webkit-touch-callout",q,z);
			s.setProperty("-webkit-" + u,q,z);
			s.setProperty("-khtml-" + u,q,z);
			s.setProperty("-moz-" + u,q,z);
			s.setProperty("-ms-" + u,q,z);
			s.setProperty(u,q,z);
			s.setProperty("cursor",v?"":"default",z);
			this.component.setAttribute("unselectable",v?null:"on");
		}
		return v;
	}
	,giveFocus: function() {
		(this.qEditable?this.qTextArea:this.component).focus();
	}
	,get_selectionBeginIndex: function() {
		if(this.qEditable) return this.qTextArea.selectionStart; else return 0;
	}
	,get_selectionEndIndex: function() {
		if(this.qEditable) return this.qTextArea.selectionEnd; else return 0;
	}
	,set_selectionBeginIndex: function(v) {
		if(this.qEditable && this.get_selectionBeginIndex() != v) this.qTextArea.selectionStart = v;
		return v;
	}
	,set_selectionEndIndex: function(v) {
		if(this.qEditable && this.get_selectionEndIndex() != v) this.qTextArea.selectionEnd = v;
		return v;
	}
	,get_selectedText: function() {
		var a = this.qTextArea.selectionStart;
		var b = this.qTextArea.selectionEnd;
		var c;
		if(b < a) {
			c = a;
			a = b;
			b = c;
		}
		if(this.qEditable) return this.qTextArea.value.substring(a,b); else return null;
	}
	,addEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		if(this.qEditable) this.component = this.qTextArea;
		flash.display.InteractiveObject.prototype.addEventListener.call(this,type,listener,useCapture,priority,weak);
		if(this.qEditable) this.component = o;
	}
	,removeEventListener: function(type,listener,useCapture,priority,weak) {
		if(weak == null) weak = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		var o = this.component;
		if(this.qEditable) this.component = this.qTextArea;
		flash.display.InteractiveObject.prototype.removeEventListener.call(this,type,listener,useCapture,priority,weak);
		if(this.qEditable) this.component = o;
	}
	,__class__: flash.text.TextField
});
flash.text.TextFieldAutoSize = function() { };
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.translateFont = function(n) {
	switch(n) {
	case "_sans":
		return "sans-serif";
	case "_serif":
		return "sans";
	case "_typewriter":
		return "monospace";
	default:
		if(n == null) return "sans-serif";
		return n;
	}
};
flash.text.TextFormat.prototype = {
	clone: function() {
		var o = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		o.align = this.align;
		o.leftMargin = this.leftMargin;
		o.rightMargin = this.rightMargin;
		o.indent = this.indent;
		o.leading = this.leading;
		o.blockIndent = this.blockIndent;
		o.bullet = this.bullet;
		o.display = this.display;
		o.kerning = this.kerning;
		o.letterSpacing = this.letterSpacing;
		o.tabStops = this.tabStops;
		return o;
	}
	,get_fontStyle: function() {
		return (this.bold?"bold ":"") + (this.italic?"italic ":"") + this.size + "px " + flash.text.TextFormat.translateFont(this.font);
	}
	,__class__: flash.text.TextFormat
};
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.utils = {};
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated = this.position = 0);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var r = new flash.utils.ByteArray();
	r.byteView = new Uint8Array(inBytes.b);
	r.set_length(r.byteView.length);
	r.allocated = r.length;
	return r;
};
flash.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var r = new flash.utils.ByteArray();
	r.set_length(r.allocated = buffer.byteLength);
	r.data = new DataView(buffer);
	r.byteView = new Uint8Array(buffer);
	return r;
};
flash.utils.ByteArray.prototype = {
	__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,_getUTFBytesCount: function(value) {
		var r = 0;
		var i = -1;
		var l = value.length;
		var c;
		var count = 0;
		while(++i < l) {
			c = value.charCodeAt(i);
			if(c <= 7) r += 1; else if(c <= 2047) r += 2; else if(c <= 65535) r += 3; else r += 4;
		}
		return r;
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,clear: function() {
		this.set_length(this.position = 0);
	}
	,nmeFromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,nmeGet: function(pos) {
		return this.data.getUint8(pos);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeSet: function(p,v) {
		this.data.setUint8(p,v);
	}
	,readBoolean: function() {
		return this.data.getUint8(this.position++) != 0;
	}
	,readByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		var l = offset + length;
		if(bytes.length < l) bytes.set_length(l);
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var r = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return r;
	}
	,readFloat: function() {
		var r = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return r;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) this.set_length(len);
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var r = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return r;
	}
	,readShort: function() {
		var r = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return r;
	}
	,readUnsignedByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var r = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return r;
	}
	,readUTF: function() {
		return this.readUTFBytes(this.readUnsignedShort());
	}
	,readUTFBytes: function(len) {
		var r = "";
		var max = this.position + len;
		while(this.position < max) {
			var c = this.data.getUint8(this.position++);
			if(c < 8) {
				if(c == 0) break;
				r += String.fromCharCode(c);
			} else if(c < 224) r += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) & 7); else if(c < 240) {
				var c2 = this.data.getUint8(this.position++);
				r += String.fromCharCode((c & 31) << 0 | (c2 & 7) << 6 | this.data.getUint8(this.position++) & 7);
			} else {
				var c21 = this.data.getUint8(this.position++);
				var c3 = this.data.getUint8(this.position++);
				r += String.fromCharCode((c & 15) << 18 | (c21 & 7) << 0 | c3 << 6 & 7 | this.data.getUint8(this.position++) & 7);
			}
		}
		return r;
	}
	,toString: function() {
		var o = this.position;
		var r;
		this.position = 0;
		r = this.readUTFBytes(this.length);
		this.position = o;
		return r;
	}
	,toBase64: function() {
		var o = this;
		var q = o.position;
		var l = o.length;
		var p = -1;
		var v = o.data;
		var r = "";
		var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz003456789+/=";
		var a;
		var b;
		var c;
		while(++p < l) {
			a = v.getUint8(p);
			if(++p < l) b = v.getUint8(p); else b = 0;
			if(++p < l) c = v.getUint8(p); else c = 0;
			r += m.charAt(a >> 2) + m.charAt((a & 3) << 4 | b >> 4) + (p - 1 < l?m.charAt((b & 15) << 2 | c >> 6):"=") + (p < l?m.charAt(c & 63):"=");
		}
		return r;
	}
	,writeBoolean: function(v) {
		this.writeByte(v?1:0);
	}
	,writeByte: function(v) {
		var l = this.position + 1;
		if(this.length < l) this.set_length(l);
		var data = this.data;
		data.setInt8(this.position,v);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var l = this.position + length;
		if(this.length < l) this.set_length(l);
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var l = this.position + 8;
		if(this.length < l) this.set_length(l);
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var l = this.position + 2;
		if(this.length < l) this.set_length(l);
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var l = this.position + 4;
		if(this.length < l) this.set_length(l);
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var l = this.position + 2;
		if(this.length < l) this.set_length(l);
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var i = -1;
		var l = value.length;
		var c;
		while(++i < l) {
			c = value.charCodeAt(i);
			if(c <= 7) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(8 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 0);
				this.writeByte(8 | c >> 6 & 63);
				this.writeByte(8 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(8 | c >> 0 & 63);
				this.writeByte(8 | c >> 6 & 63);
				this.writeByte(8 | c & 63);
			}
		}
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		return this.length = value;
	}
	,__class__: flash.utils.ByteArray
};
flash.utils.Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
var haxe = {};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Int64 = function(high,low) {
	this.high = high | 0;
	this.low = low | 0;
};
$hxClasses["haxe.Int64"] = haxe.Int64;
haxe.Int64.__name__ = ["haxe","Int64"];
haxe.Int64.sub = function(a,b) {
	var high = a.high - b.high | 0;
	var low = a.low - b.low | 0;
	if(haxe.Int64.uicompare(a.low,b.low) < 0) high--;
	return new haxe.Int64(high,low);
};
haxe.Int64.divMod = function(modulus,divisor) {
	var quotient = new haxe.Int64(0,0);
	var mask_high = 0;
	var mask_low = 1;
	divisor = new haxe.Int64(divisor.high,divisor.low);
	while(divisor.high >= 0) {
		var cmp = haxe.Int64.ucompare(divisor,modulus);
		divisor.high = divisor.high << 1 | 0 | divisor.low >>> 31 | 0;
		divisor.low = divisor.low << 1 | 0;
		mask_high = mask_high << 1 | 0 | mask_low >>> 31 | 0;
		mask_low = mask_low << 1 | 0;
		if(cmp >= 0) break;
	}
	while((mask_low | mask_high | 0) != 0) {
		if(haxe.Int64.ucompare(modulus,divisor) >= 0) {
			quotient.high = quotient.high | mask_high | 0;
			quotient.low = quotient.low | mask_low | 0;
			modulus = haxe.Int64.sub(modulus,divisor);
		}
		mask_low = mask_low >>> 1 | (mask_high << 31 | 0) | 0;
		mask_high = mask_high >>> 1;
		divisor.low = divisor.low >>> 1 | (divisor.high << 31 | 0) | 0;
		divisor.high = divisor.high >>> 1;
	}
	return { quotient : quotient, modulus : modulus};
};
haxe.Int64.neg = function(a) {
	var high = ~a.high | 0;
	var low = -a.low | 0;
	if(low == 0) high++;
	return new haxe.Int64(high,low);
};
haxe.Int64.uicompare = function(a,b) {
	if(a < 0) {
		if(b < 0) return ~b - ~a | 0; else return 1;
	} else if(b < 0) return -1; else return a - b | 0;
};
haxe.Int64.ucompare = function(a,b) {
	var v = haxe.Int64.uicompare(a.high,b.high);
	if(v != 0) return v; else return haxe.Int64.uicompare(a.low,b.low);
};
haxe.Int64.prototype = {
	toString: function() {
		if((this.high | this.low) == 0) return "0";
		var str = "";
		var neg = false;
		var i = this;
		if(i.high < 0) {
			neg = true;
			i = haxe.Int64.neg(i);
		}
		var ten = new haxe.Int64(0,10);
		while(!((i.high | i.low) == 0)) {
			var r = haxe.Int64.divMod(i,ten);
			str = r.modulus.low + str;
			i = r.quotient;
		}
		if(neg) str = "-" + str;
		return str;
	}
	,__class__: haxe.Int64
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
};
haxe.io = {};
haxe.io.Bytes = function() { };
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.prototype = {
	__class__: haxe.io.Bytes
};
haxe.ds = {};
haxe.ds.BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
haxe.ds.BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe.ds.BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,iterator: function() {
		var ret = [];
		this.iteratorLoop(this.root,ret);
		return HxOverrides.iter(ret);
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,iteratorLoop: function(node,acc) {
		if(node != null) {
			this.iteratorLoop(node.left,acc);
			acc.push(node.value);
			this.iteratorLoop(node.right,acc);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe.ds.BalancedTree
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
haxe.ds.TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe.ds.TreeNode.prototype = {
	__class__: haxe.ds.TreeNode
};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.StringMap
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
metazelda.Bounds = function(x,y,right,bottom) {
	this.left = x;
	this.top = y;
	this.right = right;
	this.bottom = bottom;
};
$hxClasses["metazelda.Bounds"] = metazelda.Bounds;
metazelda.Bounds.__name__ = ["metazelda","Bounds"];
metazelda.Bounds.prototype = {
	width: function() {
		return this.right - this.left + 1;
	}
	,height: function() {
		return this.bottom - this.top + 1;
	}
	,toString: function() {
		return "Bounds(" + this.left + ", " + this.top + ", " + this.right + ", " + this.bottom + ")";
	}
	,__class__: metazelda.Bounds
};
metazelda.Condition = function(arg) {
	if(arg == null) {
		this.keyLevel = 0;
		this.switchState = "EITHER";
	} else if(js.Boot.__instanceof(arg,metazelda.Symbol)) {
		var e;
		e = js.Boot.__cast(arg , metazelda.Symbol);
		if(e.getValue() == -5) {
			this.keyLevel = 0;
			this.switchState = "OFF";
		} else if(e.getValue() == -4) {
			this.keyLevel = 0;
			this.switchState = "ON";
		} else {
			this.keyLevel = e.getValue() + 1;
			this.switchState = "EITHER";
		}
	} else if(js.Boot.__instanceof(arg,metazelda.Condition)) {
		this.keyLevel = arg.keyLevel;
		this.switchState = arg.switchState;
	} else if(js.Boot.__instanceof(arg,metazelda._Condition.SwitchState_Impl_)) {
		this.keyLevel = 0;
		this.switchState = arg;
	}
};
$hxClasses["metazelda.Condition"] = metazelda.Condition;
metazelda.Condition.__name__ = ["metazelda","Condition"];
metazelda.Condition.prototype = {
	equals: function(other) {
		if(js.Boot.__instanceof(other,metazelda.Condition)) return this.keyLevel == other.keyLevel && this.switchState == other.switchState;
		return false;
	}
	,addSymbol: function(sym) {
		if(sym.getValue() == -5) {
			metazelda.util.Utils.assert(this.switchState == null,null,{ fileName : "Condition.hx", lineNumber : 91, className : "metazelda.Condition", methodName : "addSymbol"});
			this.switchState = "OFF";
		} else if(sym.getValue() == -4) {
			metazelda.util.Utils.assert(this.switchState == null,null,{ fileName : "Condition.hx", lineNumber : 94, className : "metazelda.Condition", methodName : "addSymbol"});
			this.switchState = "ON";
		} else this.keyLevel = Std["int"](Math.max(this.keyLevel,sym.getValue() + 1));
	}
	,addCondition: function(cond) {
		if(this.switchState == "EITHER") this.switchState = cond.switchState; else metazelda.util.Utils.assert(this.switchState == cond.switchState,null,{ fileName : "Condition.hx", lineNumber : 106, className : "metazelda.Condition", methodName : "addCondition"});
		this.keyLevel = Std["int"](Math.max(this.keyLevel,cond.keyLevel));
	}
	,andSymbol: function(sym) {
		var result = new metazelda.Condition(this);
		result.addSymbol(sym);
		return result;
	}
	,andCondition: function(other) {
		if(other == null) return this;
		var result = new metazelda.Condition(this);
		result.addCondition(other);
		return result;
	}
	,impliesCondition: function(other) {
		return this.keyLevel >= other.keyLevel && (this.switchState == other.switchState || other.switchState == "EITHER");
	}
	,impliesSymbol: function(s) {
		return this.impliesCondition(new metazelda.Condition(s));
	}
	,singleSymbolDifference: function(other) {
		if(this.equals(other)) return null;
		if(this.switchState == other.switchState) return new metazelda.Symbol(Std["int"](Math.max(this.keyLevel,other.keyLevel)) - 1); else {
			if(this.keyLevel != other.keyLevel) return null;
			metazelda.util.Utils.assert(this.switchState != other.switchState,null,{ fileName : "Condition.hx", lineNumber : 193, className : "metazelda.Condition", methodName : "singleSymbolDifference"});
			if(this.switchState != "EITHER" && other.switchState != "EITHER") return null;
			var nonEither;
			if(this.switchState != "EITHER") nonEither = this.switchState; else nonEither = other.switchState;
			return new metazelda.Symbol(nonEither == "ON"?-4:-5);
		}
	}
	,toString: function() {
		var result = "";
		if(this.keyLevel != 0) result += new metazelda.Symbol(this.keyLevel - 1).toString();
		if(this.switchState != "EITHER") {
			if(result != "") result += ",";
			result += metazelda._Condition.SwitchState_Impl_.toSymbol(this.switchState).toString();
		}
		return result;
	}
	,getKeyLevel: function() {
		return this.keyLevel;
	}
	,getSwitchState: function() {
		return this.switchState;
	}
	,__class__: metazelda.Condition
};
metazelda._Condition = {};
metazelda._Condition.SwitchState_Impl_ = function() { };
$hxClasses["metazelda._Condition.SwitchState_Impl_"] = metazelda._Condition.SwitchState_Impl_;
metazelda._Condition.SwitchState_Impl_.__name__ = ["metazelda","_Condition","SwitchState_Impl_"];
metazelda._Condition.SwitchState_Impl_._new = function(s) {
	return s;
};
metazelda._Condition.SwitchState_Impl_.fromString = function(s) {
	return s;
};
metazelda._Condition.SwitchState_Impl_.toSymbol = function(this1) {
	if(this1 == "OFF") return new metazelda.Symbol(-5); else if(this1 == "ON") return new metazelda.Symbol(-4);
	return null;
};
metazelda._Condition.SwitchState_Impl_.invert = function(this1) {
	if(this1 == "OFF") return "ON"; else if(this1 == "ON") return "OFF";
	return metazelda._Condition.SwitchState_Impl_.fromString(this1);
};
metazelda.IDungeon = function() { };
$hxClasses["metazelda.IDungeon"] = metazelda.IDungeon;
metazelda.IDungeon.__name__ = ["metazelda","IDungeon"];
metazelda.IDungeon.prototype = {
	__class__: metazelda.IDungeon
};
metazelda.Dungeon = function() {
	this.rooms = new metazelda.util.SimpleTreeMap();
	this.bounds = new metazelda.Bounds(0,0,0,0);
};
$hxClasses["metazelda.Dungeon"] = metazelda.Dungeon;
metazelda.Dungeon.__name__ = ["metazelda","Dungeon"];
metazelda.Dungeon.__interfaces__ = [metazelda.IDungeon];
metazelda.Dungeon.prototype = {
	getExtentBounds: function() {
		return this.bounds;
	}
	,getRooms: function() {
    return this.rooms.values();
	}
	,roomCount: function() {
    //room.setID(Math.random()*100);
		return this.rooms.size();
	}
	,get: function(coords) {
		return this.rooms.get(coords);
	}
	,getBy: function(x,y) {
		return this.get(new metazelda.util.Coords(x,y));
	}
	,add: function(room,i) {

		this.rooms.set(room.coords,room);

		if(room.coords.x < this.bounds.left) this.bounds = new metazelda.Bounds(room.coords.x,this.bounds.top,this.bounds.right,this.bounds.bottom);
		if(room.coords.x > this.bounds.right) this.bounds = new metazelda.Bounds(this.bounds.left,this.bounds.top,room.coords.x,this.bounds.bottom);
		if(room.coords.y < this.bounds.top) this.bounds = new metazelda.Bounds(this.bounds.left,room.coords.y,this.bounds.right,this.bounds.bottom);
		if(room.coords.y > this.bounds.bottom) this.bounds = new metazelda.Bounds(this.bounds.left,this.bounds.top,this.bounds.right,room.coords.y);
	}
	,linkOneWay: function(room1,room2,cond) {
		metazelda.util.Utils.assert(this.rooms.containsValue(room1) && this.rooms.containsValue(room2),null,{ fileName : "Dungeon.hx", lineNumber : 78, className : "metazelda.Dungeon", methodName : "linkOneWay"});
		metazelda.util.Utils.assert(room1.coords.isAdjacent(room2.coords),null,{ fileName : "Dungeon.hx", lineNumber : 79, className : "metazelda.Dungeon", methodName : "linkOneWay"});
		var d = room1.coords.getDirectionTo(room2.coords);
		room1.getEdges()[d.code] = new metazelda.Edge(cond,room2) 
	

	}
	,link: function(room1,room2,cond) {
		metazelda.util.Utils.assert(this.rooms.containsValue(room1) && this.rooms.containsValue(room2),null,{ fileName : "Dungeon.hx", lineNumber : 86, className : "metazelda.Dungeon", methodName : "link"});
		metazelda.util.Utils.assert(room1.coords.isAdjacent(room2.coords),null,{ fileName : "Dungeon.hx", lineNumber : 87, className : "metazelda.Dungeon", methodName : "link"});
		var d = room1.coords.getDirectionTo(room2.coords);
		room1.getEdges()[d.code] = new metazelda.Edge(cond,room2);
		room2.getEdges()[metazelda.util.Direction.oppositeDirection(d).code] = new metazelda.Edge(cond,room1);

	
	}
	,roomsAreLinked: function(room1,room2) {
		var d = room1.coords.getDirectionTo(room2.coords);
		
		return room1.getEdge(d) != null || 
		room2.getEdge(metazelda.util.Direction.oppositeDirection(d)) != null;


	}
	,findStart: function() {
		var _g = 0;
		var _g1 = this.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.isStart()) return room;
		}
		return null;
	}
	,findBoss: function() {
		var _g = 0;
		var _g1 = this.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.isBoss()) return room;
		}
		return null;
	}
	,findGoal: function() {
		var _g = 0;
		var _g1 = this.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.isGoal()) return room;
		}
		return null;
	}
	,findSwitch: function() {
		var _g = 0;
		var _g1 = this.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.isSwitch()) return room;
		}
		return null;
	}
	,__class__: metazelda.Dungeon
};
metazelda.Edge = function(symbol,dir) {
	this.symbol = symbol;
	this.dir = dir
};
$hxClasses["metazelda.Edge"] = metazelda.Edge;
metazelda.Edge.__name__ = ["metazelda","Edge"];
metazelda.Edge.prototype = {
	hasSymbol: function() {
		return this.symbol != null;
	}
	,getSymbol: function() {
		return this.symbol;
	}
	,setSymbol: function(symbol) {
		this.symbol = symbol;

	}
	,equals: function(other) {
		if(js.Boot.__instanceof(other,metazelda.Edge)) return this.symbol == other.symbol || this.symbol.equals(other.symbol);
		return false;
	}
	,__class__: metazelda.Edge
};
metazelda.Room = function(coords,parent,item,precond,id) {
	this.coords = coords;
	this.item = item;
	var this1;
	this1 = new Array(4);
	this.edges = this1;
  	this.id = id;
  	this.result = []
  	//this.gems = gems
  	this.visited = false;
  	this.fondo = Math.floor(Math.random()*4)
	this.precond = precond;
	this.intensity = 0.0;
	this.parent = parent;
	//this.mapa = {collision: null, tiles: null, tC:null};
	this.children = new Array();
	this.dir = []
	this.level = ""
};
$hxClasses["metazelda.Room"] = metazelda.Room;
metazelda.Room.__name__ = ["metazelda","Room"];
metazelda.Room.prototype = {
	getIntensity: function() {

		return this.intensity;
	}
	,setIntensity: function(intensity) {

		this.intensity = intensity;
	}
  	,getID : function(){
      return this.id
  	}
  	,setID : function(num){
      this.id = num
  	}
	,getItem: function() {
		return this.item;
	}
	,setItem: function(item) {
		this.item = item;
	}
	,getEdges: function() {
		return this.edges;
	}
	,getEdge: function(d) {
		return this.edges[d.code];
	}
	,linkCount: function() {
		var result = 0;
		var _g = 0;
		while(_g < 4) {
			var d = _g++;
			if(this.edges[d] != null) result++;
		}
		return result;
	}
	,isStart: function() {
		return this.item != null && this.item.isStart();
	}
	,isGoal: function() {
		return this.item != null && this.item.isGoal();
	}
	,isBoss: function() {
		return this.item != null && this.item.isBoss();
	}
	,isSwitch: function() {
		return this.item != null && this.item.isSwitch();
	}
	,getPrecond: function() {
		return this.precond;
	}
	,setPrecond: function(precond) {
		this.precond = precond;
	}
	,getParent: function() {
		


		return this.parent;
	}
	,setParent: function(parent) {
		

		this.parent = parent;
	}
	,getChildren: function() {

	

		return this.children

	}
	,addChild: function(child) {

		this.children.push(child);
	}
	,toString: function() {
		return "Room(" + Std.string(this.coords) + ")";
	}
	,__class__: metazelda.Room
};
metazelda.Symbol = function(value) {
	this.value = value;

	if(value == -1) this.name = "Start"; else if(value == -2) this.name = "Goal";
  else if(value == -3) this.name = "Boss"; else if(value == -4) this.name = "ON";
  else if(value == -5) this.name = "OFF";
  else if(value == -6) this.name = "SW";
  else if(value >= 0 && value < 26)
  this.name = String.fromCharCode(HxOverrides.cca("A",0) + value);
  else if(value == null) this.name = "null"; else this.name = "" + value;

};
$hxClasses["metazelda.Symbol"] = metazelda.Symbol;
metazelda.Symbol.__name__ = ["metazelda","Symbol"];
metazelda.Symbol.prototype = {
	equals: function(other) {
		if(js.Boot.__instanceof(other,metazelda.Symbol)) return this.value == other.value;
		return false;
	}
	,getValue: function() {
		return this.value;
	}
	,isStart: function() {
		return this.value == -1;
	}
	,isGoal: function() {
		return this.value == -2;
	}
	,isBoss: function() {
		return this.value == -3;
	}
	,isSwitch: function() {
		return this.value == -6;
	}
	,isSwitchState: function() {
		return this.value == -4 || this.value == -5;
	}
	,toString: function() {
		return this.name;
	}
	,__class__: metazelda.Symbol
};
metazelda.constraints = {};
metazelda.constraints.IDungeonConstraints = function() { };
$hxClasses["metazelda.constraints.IDungeonConstraints"] = metazelda.constraints.IDungeonConstraints;
metazelda.constraints.IDungeonConstraints.__name__ = ["metazelda","constraints","IDungeonConstraints"];
metazelda.constraints.IDungeonConstraints.prototype = {
	__class__: metazelda.constraints.IDungeonConstraints
};
metazelda.constraints.CountConstraints = function(maxSpaces,maxKeys,maxSwitches) {
	this.maxSpaces = maxSpaces;
	this.maxKeys = maxKeys;
	this.maxSwitches = maxSwitches;
};
$hxClasses["metazelda.constraints.CountConstraints"] = metazelda.constraints.CountConstraints;
metazelda.constraints.CountConstraints.__name__ = ["metazelda","constraints","CountConstraints"];
metazelda.constraints.CountConstraints.__interfaces__ = [metazelda.constraints.IDungeonConstraints];
metazelda.constraints.CountConstraints.prototype = {
	getMaxSpaces: function() {
		return this.maxSpaces;
	}
	,setMaxSpaces: function(maxSpaces) {
		this.maxSpaces = maxSpaces;
	}
	,getMaxKeys: function() {
		return this.maxKeys;
	}
	,setMaxKeys: function(maxKeys) {
		this.maxKeys = maxKeys;
	}
	,getMaxSwitches: function() {
		return this.maxSwitches;
	}
	,setMaxSwitches: function(maxSwitches) {
		this.maxSwitches = maxSwitches;
	}
	,validRoomCoords: function(c) {
		return c != null && c.y <= 0;
	}
	,initialCoords: function() {
		return Lambda.list([new metazelda.util.Coords(0,0)]);
	}
	,isAcceptable: function(dungeon) {
		return true;
	}
	,__class__: metazelda.constraints.CountConstraints
};
metazelda.constraints.SpaceConstraints = function(spaceMap) {
	metazelda.constraints.CountConstraints.call(this,spaceMap.numberSpaces(),4,1);
	this.spaceMap = spaceMap;
};
$hxClasses["metazelda.constraints.SpaceConstraints"] = metazelda.constraints.SpaceConstraints;
metazelda.constraints.SpaceConstraints.__name__ = ["metazelda","constraints","SpaceConstraints"];
metazelda.constraints.SpaceConstraints.__super__ = metazelda.constraints.CountConstraints;
metazelda.constraints.SpaceConstraints.prototype = $extend(metazelda.constraints.CountConstraints.prototype,{
	validRoomCoords: function(c) {
		return c != null && this.spaceMap.get(c);
	}
	,initialCoords: function() {
		return this.spaceMap.getBottomSpaces();
	}
	,__class__: metazelda.constraints.SpaceConstraints
});
metazelda.constraints.SpaceMap = function() {
	this.spaces = new de.polygonal.ds.ListSet();
};
$hxClasses["metazelda.constraints.SpaceMap"] = metazelda.constraints.SpaceMap;
metazelda.constraints.SpaceMap.__name__ = ["metazelda","constraints","SpaceMap"];
metazelda.constraints.SpaceMap.prototype = {
	numberSpaces: function() {
		return this.spaces.size();
	}
	,get: function(c) {
		var $it0 = this.spaces.iterator();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			if(el.equals(c)) return true;
		}
		return false;
	}
	,set: function(c,val) {
		if(val) this.spaces.set(c); else this.spaces.remove(c);
	}
	,getFirst: function() {
		return this.spaces.iterator().next();
	}
	,getBottomSpaces: function() {
		var bottomRow = new List();
		bottomRow.add(this.getFirst());
		var bottomY = this.getFirst().y;
		var $it0 = this.spaces.iterator();
		while( $it0.hasNext() ) {
			var space = $it0.next();
			if(space.y > bottomY) {
				bottomY = space.y;
				bottomRow = new List();
				bottomRow.add(space);
			} else if(space.y == bottomY) bottomRow.add(space);
		}
		return bottomRow;
	}
	,__class__: metazelda.constraints.SpaceMap
};
metazelda.generators = {};
metazelda.generators.IDungeonGenerator = function() { };
$hxClasses["metazelda.generators.IDungeonGenerator"] = metazelda.generators.IDungeonGenerator;
metazelda.generators.IDungeonGenerator.__name__ = ["metazelda","generators","IDungeonGenerator"];
metazelda.generators.IDungeonGenerator.prototype = {
	__class__: metazelda.generators.IDungeonGenerator
};
metazelda.generators.DungeonGenerator = function(seed,constraints) {
	this.seed = seed;
	this.random = new metazelda.util.Random(seed);
	metazelda.util.Utils.assert(constraints != null,null,{ fileName : "DungeonGenerator.hx", lineNumber : 42, className : "metazelda.generators.DungeonGenerator", methodName : "new"});
	this.constraints = constraints;
};
$hxClasses["metazelda.generators.DungeonGenerator"] = metazelda.generators.DungeonGenerator;
metazelda.generators.DungeonGenerator.__name__ = ["metazelda","generators","DungeonGenerator"];
metazelda.generators.DungeonGenerator.__interfaces__ = [metazelda.generators.IDungeonGenerator];
metazelda.generators.DungeonGenerator.EDGE_COUNT_COMPARATOR = function(a,b) {
	return a.linkCount() - b.linkCount();
};
metazelda.generators.DungeonGenerator.INTENSITY_COMPARATOR = function(a,b) {
	if(a.getIntensity() > b.getIntensity()) return -1; else if(a.getIntensity() < b.getIntensity()) return 1; else return 0;
};
metazelda.generators.DungeonGenerator.prototype = {
	chooseRoomWithFreeEdge: function(roomCollection) {
		var rooms = roomCollection.slice();
		metazelda.util.Utils.shuffle_metazelda_Room(rooms,this.random);
		var _g1 = 0;
		var _g = rooms.length;
		while(_g1 < _g) {
			var i = _g1++;
			var room = rooms[i];
			var _g2 = 0;
			var _g3 = metazelda.util.Direction.values();
			while(_g2 < _g3.length) {
				var d = _g3[_g2];
				++_g2;
				var coords = room.coords.nextInDirection(d);
				if(this.dungeon.get(coords) == null && this.constraints.validRoomCoords(coords)) return room;
			}
		}
		return null;
	}
	,chooseFreeEdge: function(room) {
		var d0 = this.random.nextInt(4);
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			var d = metazelda.util.Direction.fromCode((d0 + i) % 4);
			var coords = room.coords.nextInDirection(d);
			if(this.dungeon.get(coords) == null && this.constraints.validRoomCoords(coords)) return d;
		}
		metazelda.util.Utils.assert(false,"Room does not have a free edge: " + Std.string(room),{ fileName : "DungeonGenerator.hx", lineNumber : 91, className : "metazelda.generators.DungeonGenerator", methodName : "chooseFreeEdge"});
		return null;
	}
	,initEntranceRoom: function(levels) {
		var coords = null;
		var possibleEntries = Lambda.array(this.constraints.initialCoords());
		coords = possibleEntries[this.random.nextInt(possibleEntries.length)];
		metazelda.util.Utils.assert(this.constraints.validRoomCoords(coords),null,{ fileName : "DungeonGenerator.hx", lineNumber : 106, className : "metazelda.generators.DungeonGenerator", methodName : "initEntranceRoom"});
		var entry = new metazelda.Room(coords,null,new metazelda.Symbol(-1),new metazelda.Condition());
		this.dungeon.add(entry);
		levels.addRoom(0,entry);
	}
	,placeRooms: function(levels) {
		var roomsPerLock;
		if(this.constraints.getMaxKeys() > 0) roomsPerLock = Std["int"](this.constraints.getMaxSpaces() / this.constraints.getMaxKeys()); else roomsPerLock = this.constraints.getMaxSpaces();
		var keyLevel = 0;
		var latestKey = null;
		var cond = new metazelda.Condition();
		var roomCount = this.dungeon.roomCount();
		while(roomCount < this.constraints.getMaxSpaces()) {
			var doLock = false;
			if(levels.getRooms(keyLevel).length >= roomsPerLock && keyLevel < this.constraints.getMaxKeys() - 1) {
				latestKey = new metazelda.Symbol(keyLevel++);
				cond = cond.andSymbol(latestKey);
				doLock = true;
			}
			var parentRoom = null;
			if(!doLock && this.random.nextInt(10) > 0) parentRoom = this.chooseRoomWithFreeEdge(levels.getRooms(keyLevel));
			if(parentRoom == null) {
				parentRoom = this.chooseRoomWithFreeEdge(this.dungeon.getRooms());
				doLock = true;
			}
			var d = this.chooseFreeEdge(parentRoom);
			var coords = parentRoom.coords.nextInDirection(d);

			var room = new metazelda.Room(coords,parentRoom,null,cond,0);

			metazelda.util.Utils.assert(this.dungeon.get(room.coords) == null,null,{
        fileName : "DungeonGenerator.hx", lineNumber : 170,
        className : "metazelda.generators.DungeonGenerator", methodName : "placeRooms"});
			this.dungeon.add(room);

			parentRoom.addChild(room);
			this.dungeon.link(parentRoom,room,doLock?latestKey:null);
			levels.addRoom(keyLevel,room);
			roomCount = this.dungeon.roomCount();

		}
	}
	,placeBossGoalRooms: function(levels) {
		var possibleGoalRooms = new Array();
		var _g = 0;
		var _g1 = this.dungeon.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.getChildren().length > 0 || room.getItem() != null) continue;
			var parent = room.getParent();

			if(parent == null || parent.getChildren().length != 1 || room.getItem() != null || !parent.getPrecond().impliesCondition(room.getPrecond())) continue;
			possibleGoalRooms.push(room);
		}
		if(possibleGoalRooms.length == 0) throw new metazelda.generators._DungeonGenerator.RetryException(null,{ fileName : "DungeonGenerator.hx", lineNumber : 28, className : "metazelda.generators.DungeonGenerator", methodName : "placeBossGoalRooms"});
		var goalRoom = possibleGoalRooms[this.random.nextInt(possibleGoalRooms.length)];
		var bossRoom = goalRoom.getParent();
		goalRoom.setItem(new metazelda.Symbol(-2));
		bossRoom.setItem(new metazelda.Symbol(-3));
		var oldKeyLevel = bossRoom.getPrecond().getKeyLevel();
		var newKeyLevel = Std["int"](Math.min(levels.keyCount(),this.constraints.getMaxKeys()));
		var oklRooms = levels.getRooms(oldKeyLevel);
		HxOverrides.remove(oklRooms,goalRoom);
		HxOverrides.remove(oklRooms,bossRoom);
		levels.addRoom(newKeyLevel,goalRoom);
		levels.addRoom(newKeyLevel,bossRoom);
		var bossKey = new metazelda.Symbol(newKeyLevel - 1);
		var precond = bossRoom.getPrecond().andSymbol(bossKey);
		bossRoom.setPrecond(precond);
		goalRoom.setPrecond(precond);
		if(newKeyLevel == 0) this.dungeon.link(bossRoom.getParent(),bossRoom); else this.dungeon.link(bossRoom.getParent(),bossRoom,bossKey);
		this.dungeon.link(bossRoom,goalRoom);
	}
	,removeDescendantsFromList: function(rooms,room) {
		HxOverrides.remove(rooms,room);
		var _g = 0;
		var _g1 = room.getChildren();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			this.removeDescendantsFromList(rooms,child);
		}
	}
	,addPrecond: function(room,cond) {
		room.setPrecond(room.getPrecond().andCondition(cond));
		var _g = 0;
		var _g1 = room.getChildren();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			this.addPrecond(child,cond);
		}
	}
	,switchLockChildRooms: function(room,givenState) {
		var anyLocks = false;
		var state;
		if(givenState != "EITHER") state = givenState; else if(this.random.nextInt(2) == 0) state = "ON"; else state = "OFF";
		var _g = 0;
		var _g1 = metazelda.util.Direction.values();
		while(_g < _g1.length) {
			var d = _g1[_g];
			++_g;
			if(room.getEdge(d) != null) {
				var nextRoom = this.dungeon.get(room.coords.nextInDirection(d));
				if(Lambda.has(room.getChildren(),nextRoom)) {
					if(room.getEdge(d).getSymbol() == null && this.random.nextInt(4) != 0) {
		
			this.dungeon.link(room,nextRoom,metazelda._Condition.SwitchState_Impl_.toSymbol(state));

            this.addPrecond(nextRoom,new metazelda.Condition(metazelda._Condition.SwitchState_Impl_.toSymbol(state)));
						anyLocks = true;
					} else {
						var temp = this.switchLockChildRooms(nextRoom,state);
						if(temp == true) anyLocks = temp;
					}

					if(givenState == "EITHER") state = metazelda._Condition.SwitchState_Impl_.invert(state);
         
        }
			}
		}
		return anyLocks;
	}
	,getSolutionPath: function() {
		var solution = new Array();
		var room = this.dungeon.findGoal();
		while(room != null) {
			solution.push(room);
			room = room.getParent();

		}
		return solution;
	}
	,placeSwitches: function() {
		if(this.constraints.getMaxSwitches() <= 0) return;
		var solution = this.getSolutionPath();
		var _g = 0;
		while(_g < 10) {
			var attempt = _g++;
			var rooms;
			var _this = this.dungeon.getRooms();
			rooms = _this.slice();
			metazelda.util.Utils.shuffle_metazelda_Room(rooms,this.random);
			metazelda.util.Utils.shuffle_metazelda_Room(solution,this.random);
			var baseRoom = null;
			var _g1 = 0;
			while(_g1 < solution.length) {
				var room = solution[_g1];
				++_g1;
				if(room.getChildren().length > 1 && room.getParent() != null) {
					baseRoom = room;
					break;
				}
			}
			if(baseRoom == null) throw new metazelda.generators._DungeonGenerator.RetryException(null,{ fileName : "DungeonGenerator.hx", lineNumber : 371, className : "metazelda.generators.DungeonGenerator", methodName : "placeSwitches"});
			var baseRoomCond = baseRoom.getPrecond();
			this.removeDescendantsFromList(rooms,baseRoom);
			var switchRoom = null;
			var _g11 = 0;
			while(_g11 < rooms.length) {
				var room1 = rooms[_g11];
				++_g11;
				if(room1.getItem() == null && baseRoomCond.impliesCondition(room1.getPrecond())) {
					switchRoom = room1;
					break;
				}
			}
			if(switchRoom == null) continue;
			if(this.switchLockChildRooms(baseRoom,"EITHER")) {
				switchRoom.setItem(new metazelda.Symbol(-6));
				return;
			}
		}
		throw new metazelda.generators._DungeonGenerator.RetryException(null,{ fileName : "DungeonGenerator.hx", lineNumber : 391, className : "metazelda.generators.DungeonGenerator", methodName : "placeSwitches"});
	}
	,graphify: function() {
		var _g = 0;
		var _g1 = this.dungeon.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			if(room.isGoal() || room.isBoss()) continue;
			var _g2 = 0;
			var _g3 = metazelda.util.Direction.values();
			while(_g2 < _g3.length) {
				var d = _g3[_g2];
				++_g2;
				if(room.getEdge(d) != null) continue;
				var nextRoom = this.dungeon.get(room.coords.nextInDirection(d));
				if(nextRoom == null || nextRoom.isGoal() || nextRoom.isBoss()) continue;
				var forwardImplies = room.precond.impliesCondition(nextRoom.precond);
				var backwardImplies = nextRoom.precond.impliesCondition(room.precond);
				if(forwardImplies && backwardImplies) {
					if(this.random.nextInt(5) != 0) continue;
					this.dungeon.link(room,nextRoom);
				} else {
					var difference = room.precond.singleSymbolDifference(nextRoom.precond);
					if(difference == null || !difference.isSwitchState() && this.random.nextInt(5) != 0) continue;
					this.dungeon.link(room,nextRoom,difference);
				}
			}
		}
	}
	,placeKeys: function(levels) {
		var _g1 = 0;
		var _g = levels.keyCount() - 1;
		while(_g1 < _g) {
			var key = _g1++;
			var rooms = levels.getRooms(key);
			metazelda.util.Utils.shuffle_metazelda_Room(rooms,this.random);
			rooms.sort(metazelda.generators.DungeonGenerator.INTENSITY_COMPARATOR);
			var placedKey = false;
			var _g2 = 0;
			while(_g2 < rooms.length) {
				var room = rooms[_g2];
				++_g2;
				if(room.getItem() == null) {
					room.setItem(new metazelda.Symbol(key));
					placedKey = true;
					break;
				}
			}
			metazelda.util.Utils.assert(placedKey == true,null,{ fileName : "DungeonGenerator.hx", lineNumber : 481, className : "metazelda.generators.DungeonGenerator", methodName : "placeKeys"});
		}
	}
	,applyIntensity: function(room,intensity) {
		intensity *= 0.95 + 0.1 * this.random.randomFloat();
		room.setIntensity(intensity);

    room_id.push(room)
    room.setID(room_id.length)

    var maxIntensity = intensity;
		var _g = 0;
		var _g1 = room.getChildren();
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(room.getPrecond().impliesCondition(child.getPrecond())) maxIntensity = Math.max(maxIntensity,this.applyIntensity(child,intensity + 1.0));
		}

		return maxIntensity;
	}
	,normalizeIntensity: function() {
		var maxIntensity = 0.0;
		var _g = 0;
		var _g1 = this.dungeon.getRooms();
		while(_g < _g1.length) {
			var room = _g1[_g];
			++_g;
			maxIntensity = Math.max(maxIntensity,room.getIntensity());
		}
		var _g2 = 0;
		var _g11 = this.dungeon.getRooms();
		while(_g2 < _g11.length) {
			var room1 = _g11[_g2];
			++_g2;
			room1.setIntensity(room1.getIntensity() * 0.99 / maxIntensity);
		}
	}
	,computeIntensity: function(levels) {
		var nextLevelBaseIntensity = 0.0;
		var _g1 = 0;
		var _g = levels.keyCount();
		while(_g1 < _g) {
			var level = _g1++;
			var intensity = nextLevelBaseIntensity * 0.8;
			var _g2 = 0;
			var _g3 = levels.getRooms(level);
			while(_g2 < _g3.length) {
				var room = _g3[_g2];
				++_g2;
				if(room.getParent() == null || !room.getParent().getPrecond().impliesCondition(room.getPrecond())) nextLevelBaseIntensity = Math.max(nextLevelBaseIntensity,this.applyIntensity(room,intensity));
			}
		}
		this.normalizeIntensity();
		this.dungeon.findBoss().setIntensity(1.0);
		this.dungeon.findGoal().setIntensity(0.0);
	}
	,checkAcceptable: function() {
		if(!this.constraints.isAcceptable(this.dungeon)) throw new metazelda.generators._DungeonGenerator.RetryException(null,{ fileName : "DungeonGenerator.hx", lineNumber : 581, className : "metazelda.generators.DungeonGenerator", methodName : "checkAcceptable"});
	}
	,generate: function() {
		var attempt = 0;
		while(true) try {
			this.dungeon = new metazelda.Dungeon();
			var levels = new metazelda.generators._DungeonGenerator.KeyLevelRoomMapping(this.constraints);
			this.initEntranceRoom(levels);
			this.placeRooms(levels);
			this.placeBossGoalRooms(levels);
			this.placeSwitches();
			this.graphify();
			this.computeIntensity(levels);
			this.placeKeys(levels);
			this.checkAcceptable();
			return;
		} catch( e ) {
			if( js.Boot.__instanceof(e,metazelda.generators._DungeonGenerator.RetryException) ) {
				if(++attempt > 20) throw "Dungeon generator failed";
			} else throw(e);
		}
	}
	,getDungeon: function() {

		return this.dungeon;
	}
	,getSeed: function() {
		return this.seed;
	}
	,__class__: metazelda.generators.DungeonGenerator
};
metazelda.generators._DungeonGenerator = {};
metazelda.generators._DungeonGenerator.KeyLevelRoomMapping = function(constraints) {
	this.map = new Array();
};
$hxClasses["metazelda.generators._DungeonGenerator.KeyLevelRoomMapping"] = metazelda.generators._DungeonGenerator.KeyLevelRoomMapping;
metazelda.generators._DungeonGenerator.KeyLevelRoomMapping.__name__ = ["metazelda","generators","_DungeonGenerator","KeyLevelRoomMapping"];
metazelda.generators._DungeonGenerator.KeyLevelRoomMapping.prototype = {
	getRooms: function(keyLevel) {
		while(keyLevel >= this.map.length) this.map.push(null);
		if(this.map[keyLevel] == null) this.map[keyLevel] = new Array();
		return this.map[keyLevel];
	}
	,addRoom: function(keyLevel,room) {
		this.getRooms(keyLevel).push(room);
	}
	,keyCount: function() {
		return this.map.length;
	}
	,__class__: metazelda.generators._DungeonGenerator.KeyLevelRoomMapping
};
metazelda.generators._DungeonGenerator.RetryException = function(message,info) {
	if(message == null) message = "";
	this.message = message;
	this.info = info;
};
$hxClasses["metazelda.generators._DungeonGenerator.RetryException"] = metazelda.generators._DungeonGenerator.RetryException;
metazelda.generators._DungeonGenerator.RetryException.__name__ = ["metazelda","generators","_DungeonGenerator","RetryException"];
metazelda.generators._DungeonGenerator.RetryException.prototype = {
	toString: function() {
		var str = "RetryException: " + this.message;
		if(this.info != null) str += " at " + this.info.className + "/" + this.info.methodName + "():" + this.info.lineNumber;
		return str;
	}
	,__class__: metazelda.generators._DungeonGenerator.RetryException
};
metazelda.generators.LinearDungeonGenerator = function(seed,constraints) {
	metazelda.generators.DungeonGenerator.call(this,seed,constraints);
};
$hxClasses["metazelda.generators.LinearDungeonGenerator"] = metazelda.generators.LinearDungeonGenerator;
metazelda.generators.LinearDungeonGenerator.__name__ = ["metazelda","generators","LinearDungeonGenerator"];
metazelda.generators.LinearDungeonGenerator.__super__ = metazelda.generators.DungeonGenerator;
metazelda.generators.LinearDungeonGenerator.prototype = $extend(metazelda.generators.DungeonGenerator.prototype,{
	astar: function(start,goal,keyLevel) {
		var astar_ = new metazelda.util.AStar(new metazelda.generators._LinearDungeonGenerator.AStarMap(keyLevel,this.dungeon),start,goal);
		return astar_.solve();
	}
	,measureNonlinearity: function() {
		var keyRooms = new Array();
		var _g1 = 0;
		var _g = this.constraints.getMaxKeys();
		while(_g1 < _g) {
			var i = _g1++;
			keyRooms.push(null);
		}
		var _g2 = 0;
		var _g11 = this.dungeon.getRooms();
		while(_g2 < _g11.length) {
			var room = _g11[_g2];
			++_g2;
			if(room.getItem() == null) continue;
			var item = room.getItem();
			if(item.getValue() >= 0 && item.getValue() < keyRooms.length) keyRooms[item.getValue()] = room;
		}
		var current = this.dungeon.findStart();
		var goal = this.dungeon.findGoal();
		metazelda.util.Utils.assert(current != null && goal != null,null,{ fileName : "LinearDungeonGenerator.hx", lineNumber : 62, className : "metazelda.generators.LinearDungeonGenerator", methodName : "measureNonlinearity"});
		var nextKey = 0;
		var nonlinearity = 0;
		var visitedRooms = new de.polygonal.ds.ListSet();
		while(current != goal) {
			var intermediateGoal;
			if(nextKey == this.constraints.getMaxKeys()) intermediateGoal = goal; else intermediateGoal = keyRooms[nextKey];
			var steps = this.astar(current.coords,intermediateGoal.coords,nextKey);
			var _g3 = 0;
			while(_g3 < steps.length) {
				var c = [steps[_g3]];
				++_g3;
				if(Lambda.exists(visitedRooms,(function(c) {
					return function(a) {
						return a.equals(c[0]);
					};
				})(c))) nonlinearity++;
			}
			var _g4 = 0;
			while(_g4 < steps.length) {
				var step = steps[_g4];
				++_g4;
				visitedRooms.set(step);
			}
			nextKey++;
			current = this.dungeon.get(steps[steps.length - 1]);
		}
		return nonlinearity;
	}
	,generate: function() {
		var attempts = 0;
		var currentNonlinearity = 2147483647;
		var bestAttempt = 0;
		var currentBest = null;
		while(attempts++ < 10) {
			metazelda.generators.DungeonGenerator.prototype.generate.call(this);
			var nonlinearity = this.measureNonlinearity();
			if(nonlinearity < currentNonlinearity) {
				currentNonlinearity = nonlinearity;
				bestAttempt = attempts;
				currentBest = this.dungeon;
			}
		}
		metazelda.util.Utils.assert(currentBest != null,null,{ fileName : "LinearDungeonGenerator.hx", lineNumber : 114, className : "metazelda.generators.LinearDungeonGenerator", methodName : "generate"});
		this.dungeon = currentBest;
	}
	,__class__: metazelda.generators.LinearDungeonGenerator
});
metazelda.util = {};
metazelda.util.IRoom = function() { };
$hxClasses["metazelda.util.IRoom"] = metazelda.util.IRoom;
metazelda.util.IRoom.__name__ = ["metazelda","util","IRoom"];
metazelda.util.IRoom.prototype = {
	__class__: metazelda.util.IRoom
};
metazelda.generators._LinearDungeonGenerator = {};
metazelda.generators._LinearDungeonGenerator.AStarRoom = function(keyLevel,room) {
	this.keyLevel = keyLevel;
	this.room = room;
};
$hxClasses["metazelda.generators._LinearDungeonGenerator.AStarRoom"] = metazelda.generators._LinearDungeonGenerator.AStarRoom;
metazelda.generators._LinearDungeonGenerator.AStarRoom.__name__ = ["metazelda","generators","_LinearDungeonGenerator","AStarRoom"];
metazelda.generators._LinearDungeonGenerator.AStarRoom.__interfaces__ = [metazelda.util.IRoom];
metazelda.generators._LinearDungeonGenerator.AStarRoom.prototype = {
	neighbors: function() {
		var result = new List();
		var _g = 0;
		var _g1 = metazelda.util.Direction.values();
		while(_g < _g1.length) {
			var d = _g1[_g];
			++_g;
			var e = this.room.getEdge(d);
			if(e != null && (!e.hasSymbol() || e.getSymbol().getValue() < this.keyLevel)) 
				result.add(this.room.coords.nextInDirection(d));
		}
		return result;
	}
	,__class__: metazelda.generators._LinearDungeonGenerator.AStarRoom
};
metazelda.util.IMap = function() { };
$hxClasses["metazelda.util.IMap"] = metazelda.util.IMap;
metazelda.util.IMap.__name__ = ["metazelda","util","IMap"];
metazelda.util.IMap.prototype = {
	__class__: metazelda.util.IMap
};
metazelda.generators._LinearDungeonGenerator.AStarMap = function(keyLevel,dungeon) {
	this.keyLevel = keyLevel;
	this.dungeon = dungeon;
};
$hxClasses["metazelda.generators._LinearDungeonGenerator.AStarMap"] = metazelda.generators._LinearDungeonGenerator.AStarMap;
metazelda.generators._LinearDungeonGenerator.AStarMap.__name__ = ["metazelda","generators","_LinearDungeonGenerator","AStarMap"];
metazelda.generators._LinearDungeonGenerator.AStarMap.__interfaces__ = [metazelda.util.IMap];
metazelda.generators._LinearDungeonGenerator.AStarMap.prototype = {
	get: function(xy) {
		return new metazelda.generators._LinearDungeonGenerator.AStarRoom(this.keyLevel,this.dungeon.get(xy));
	}
	,__class__: metazelda.generators._LinearDungeonGenerator.AStarMap
};
metazelda.util.AStar = function(map,from,to) {
	this.openSet = new de.polygonal.ds.PriorityQueue(true,110);
	this.closedSet = new de.polygonal.ds.ListSet();
	this.cameFrom = new metazelda.util.SimpleTreeMap();
	this.fScore = new metazelda.util.SimpleTreeMap();
	this.gScore = new metazelda.util.SimpleTreeMap();
	this.map = map;
	this.from = from;
	this.to = to;
};
$hxClasses["metazelda.util.AStar"] = metazelda.util.AStar;
metazelda.util.AStar.__name__ = ["metazelda","util","AStar"];
metazelda.util.AStar.prototype = {
	heuristicDistance: function(pos) {
		return Math.abs(this.to.x - pos.x) + Math.abs(this.to.y - pos.y);
	}
	,updateFScore: function(pos) {
		this.fScore.set(pos,this.gScore.get(pos) + this.heuristicDistance(pos));
	}
	,solve: function() {
		this.openSet.enqueue(this.makeCoords(this.from));
		this.gScore.set(this.from,0.0);
		this.updateFScore(this.from);
		while(!(this.openSet._size == 0)) {
			var current = this.openSet.dequeue().coords;
			if(current.equals(this.to)) return this.reconstructPath();
			this.closedSet.set(current);
			var $it0 = this.map.get(current).neighbors().iterator();
			while( $it0.hasNext() ) {
				var neighbor = $it0.next();
				var neighbor1 = [neighbor];
				if(Lambda.exists(this.closedSet,(function(neighbor1) {
					return function(el) {
						return el.equals(neighbor1[0]);
					};
				})(neighbor1))) continue;
				var dist = current.distance(neighbor1[0]);
				var g = this.gScore.get(current) + dist;
				if(!this.opensetContains(neighbor1[0]) || g < this.gScore.get(neighbor1[0])) {
					this.cameFrom.set(neighbor1[0],current);
					this.gScore.set(neighbor1[0],g);
					this.updateFScore(neighbor1[0]);
					this.openSet.enqueue(new metazelda.util.PriorityCoords(this.fScore.get(neighbor1[0]),neighbor1[0]));
				}
			}
		}
		return null;
	}
	,opensetContains: function(coords) {
		var $it0 = this.openSet.iterator();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			if(el.coords.equals(coords)) return true;
		}
		return false;
	}
	,makeCoords: function(from) {
		return new metazelda.util.PriorityCoords(this.fScore.get(from),from);
	}
	,reconstructPath: function() {
		var result = new Array();
		var current = this.to;
		while(!current.equals(this.from)) {
			result.push(current);
			current = this.cameFrom.get(current);
		}
		result.reverse();
		return result;
	}
	,nextStep: function() {
		var path = this.solve();
		if(path == null || path.length == 0) return null;
		return path[0];
	}
	,__class__: metazelda.util.AStar
};
metazelda.util.PriorityCoords = function(priority,coords) {
	this.priority = priority;
	this.coords = coords;
};
$hxClasses["metazelda.util.PriorityCoords"] = metazelda.util.PriorityCoords;
metazelda.util.PriorityCoords.__name__ = ["metazelda","util","PriorityCoords"];
metazelda.util.PriorityCoords.__interfaces__ = [de.polygonal.ds.Prioritizable];
metazelda.util.PriorityCoords.prototype = {
	toString: function() {
		return this.coords.toString();
	}
	,__class__: metazelda.util.PriorityCoords
};
metazelda.util.Coords = function(x,y) {
	this.x = x;
	this.y = y;
};
$hxClasses["metazelda.util.Coords"] = metazelda.util.Coords;
metazelda.util.Coords.__name__ = ["metazelda","util","Coords"];
metazelda.util.Coords.__interfaces__ = [de.polygonal.ds.Comparable];
metazelda.util.Coords.prototype = {
	nextInDirection: function(d) {
		return this.add(d.x,d.y);
	}
	,add: function(dx,dy) {
		return new metazelda.util.Coords(this.x + dx,this.y + dy);
	}
	,substract: function(other) {
		return new metazelda.util.Coords(this.x - other.x,this.y - other.y);
	}
	,equals: function(other) {
		if(js.Boot.__instanceof(other,metazelda.util.Coords)) return this.x == other.x && this.y == other.y;
		return false;
	}
	,compare: function(other) {
		var d = this.x - other.x;
		if(d == 0) d = this.y - other.y;
		return d;
	}
	,compareTo: function(other) {
		return this.compare(other);
	}
	,isAdjacent: function(other) {
		var dx = Std["int"](Math.abs(this.x - other.x));
		var dy = Std["int"](Math.abs(this.y - other.y));
		return dx == 1 && dy == 0 || dx == 0 && dy == 1;
	}
	,getDirectionTo: function(other) {
		var dx = this.x - other.x;
		var dy = this.y - other.y;
		metazelda.util.Utils.assert(dx == 0 || dy == 0,null,{ fileName : "Coords.hx", lineNumber : 100, className : "metazelda.util.Coords", methodName : "getDirectionTo"});
		if(dx < 0) return metazelda.util.Direction.E;
		if(dx > 0) return metazelda.util.Direction.W;
		if(dy < 0) return metazelda.util.Direction.S;
		if(dy > 0) return metazelda.util.Direction.N;
		throw "Coords do not align in one dimension, or are equal";
	}
	,distance: function(other) {
		var dx = this.x - other.x;
		var dy = this.y - other.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
	,toString: function() {
		return "(" + this.x + ", " + this.y + ")";
	}
	,clone: function() {
		return new metazelda.util.Coords(this.x,this.y);
	}
	,__class__: metazelda.util.Coords
};
metazelda.util.Direction = function(code,x,y) {
	this.code = code;
	this.x = x;
	this.y = y;
};
$hxClasses["metazelda.util.Direction"] = metazelda.util.Direction;
metazelda.util.Direction.__name__ = ["metazelda","util","Direction"];
metazelda.util.Direction.oppositeDirection = function(d) {
	if(d.equals(metazelda.util.Direction.N)) return metazelda.util.Direction.S; else if(d.equals(metazelda.util.Direction.S)) return metazelda.util.Direction.N; else if(d.equals(metazelda.util.Direction.E)) return metazelda.util.Direction.W; else if(d.equals(metazelda.util.Direction.W)) return metazelda.util.Direction.E; else throw "Unknown direction";
};
metazelda.util.Direction.fromCode = function(code) {
	switch(code) {
	case 0:
		return metazelda.util.Direction.N;
	case 1:
		return metazelda.util.Direction.E;
	case 2:
		return metazelda.util.Direction.S;
	case 3:
		return metazelda.util.Direction.W;
	default:
		return null;
	}
};
metazelda.util.Direction.values = function() {
	return [metazelda.util.Direction.N,metazelda.util.Direction.E,metazelda.util.Direction.S,metazelda.util.Direction.W];
};
metazelda.util.Direction.prototype = {
	equals: function(other) {
		if(js.Boot.__instanceof(other,metazelda.util.Direction)) return this.code == other.code && this.x == other.x && this.y == other.y;
		return false;
	}
	,toString: function() {
		return "Direction(" + this.code + ", " + this.x + ", " + this.y + ")";
	}
	,__class__: metazelda.util.Direction
};
metazelda.util.Random = function(seed) {
	if(seed == null) seed = 1;
	this.setSeed(seed);
};
$hxClasses["metazelda.util.Random"] = metazelda.util.Random;
metazelda.util.Random.__name__ = ["metazelda","util","Random"];
metazelda.util.Random.prototype = {
	getSeed: function() {
		return this._fseed | 0;
	}
	,setSeed: function(seed) {
		metazelda.util.Utils.assert(seed >= 0 && seed < 2147483647,null,{ fileName : "Random.hx", lineNumber : 59, className : "metazelda.util.Random", methodName : "setSeed"});
		this._fseed = seed;
	}
	,nextInt: function(n) {
		if(n == null) n = 2147483647;
		return Std["int"](this.randomFloat() * n);
	}
	,random: function() {
		this._fseed = this._fseed * 1687. % 2147483647.;
		return this._fseed;
	}
	,randomFloat: function() {
		return this.random() / 2147483647.;
	}
	,__class__: metazelda.util.Random
};
metazelda.util.SimpleTreeMap = function() {
	haxe.ds.BalancedTree.call(this);
};
$hxClasses["metazelda.util.SimpleTreeMap"] = metazelda.util.SimpleTreeMap;
metazelda.util.SimpleTreeMap.__name__ = ["metazelda","util","SimpleTreeMap"];
metazelda.util.SimpleTreeMap.__super__ = haxe.ds.BalancedTree;
metazelda.util.SimpleTreeMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		return k1.compare(k2);
	}
	,values: function() {
		return Lambda.array(this);
	}
	,size: function() {
		return Lambda.array(this).length;
	}
	,containsValue: function(value) {
		var $it0 = this.iterator();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			if(el == value) return true;
		}
		return false;
	}
	,__class__: metazelda.util.SimpleTreeMap
});
metazelda.util.Utils = function() { };
$hxClasses["metazelda.util.Utils"] = metazelda.util.Utils;
metazelda.util.Utils.__name__ = ["metazelda","util","Utils"];
metazelda.util.Utils.shuffle_metazelda_Room = function(array,rnd) {
	var size = array.length;
	var int1 = 0;
	var int2 = 0;
	var tempObject = null;
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		int1 = rnd.nextInt(size);
		int2 = rnd.nextInt(size);
		tempObject = array[int1];
		array[int1] = array[int2];
		array[int2] = tempObject;
	}
	return array;
};
metazelda.util.Utils.assert = function(cond,msg,info) {
	if(msg == null) msg = "";
	if(cond != true) throw "Assertation failed: \"" + msg + "\"\n" + info.fileName + ":" + info.lineNumber + ": Assertation failed in " + info.className + "/" + info.methodName + "()";
};
metazelda.viewer.DungeonView = function() {
	flash.display.Sprite.call(this);
	this.addEventListener("addedToStage",$bind(this,this.onAdded));
};
$hxClasses["metazelda.viewer.DungeonView"] = metazelda.viewer.DungeonView;
metazelda.viewer.DungeonView.__name__ = ["metazelda","viewer","DungeonView"];
metazelda.viewer.DungeonView.__super__ = flash.display.Sprite;
metazelda.viewer.DungeonView.prototype = $extend(flash.display.Sprite.prototype,{
	onAdded: function(event) {
		this.removeEventListener("addedToStage",$bind(this,this.onAdded));
	}
	,draw: function(dungeon) {

		var bounds = dungeon.getExtentBounds();
		var width = flash.Lib.get_current().get_stage().get_stageWidth();
		var height = flash.Lib.get_current().get_stage().get_stageHeight();
		var scale = Math.min(width / bounds.width(),height / bounds.height());
		var _g = this;
		_g.set_x(_g.x + -scale * bounds.left);
		var _g1 = this;
		_g1.set_y(_g1.y + -scale * bounds.top);
		var _g2 = 0;
		var _g11 = dungeon.getRooms();

		Rooms = dungeon.getRooms();
	
    while(_g2 < _g11.length) {
			var room = _g11[_g2];
			++_g2;
			this.drawEdges(dungeon,room,scale);
		}
		var _g3 = 0;
		var _g0 = dungeon.getRooms();
		while(_g3 < _g0.length) {
			var room1 = _g0[_g3];
			++_g3;
			this.drawRoom(room1,scale);
		}

	}
	,drawArrow: function(ax,ay,bx,by,color) {
		if(color == null) color = 16762880;
		var abx;
		var aby;
		var ab;
		var cx;
		var cy;
		var dx;
		var dy;
		var ex;
		var ey;
		var fx;
		var fy;
		var size = 8;
		var ratio = 2;
		var fullness1 = 2;
		var fullness2 = 3;
		abx = bx - ax;
		aby = by - ay;
		ab = Math.sqrt(abx * abx + aby * aby);
		cx = bx - size * abx / ab;
		cy = by - size * aby / ab;
		dx = cx + (by - cy) / ratio;
		dy = cy + (cx - bx) / ratio;
		ex = cx - (by - cy) / ratio;
		ey = cy - (cx - bx) / ratio;
		fx = (fullness1 * cx + bx) / fullness2;
		fy = (fullness1 * cy + by) / fullness2;
		this.get_graphics().beginFill(color);
		this.get_graphics().lineStyle(1,color);
		this.get_graphics().moveTo(ax,ay);
		this.get_graphics().lineTo(bx,by);
		this.get_graphics().lineTo(dx,dy);
		this.get_graphics().lineTo(fx,fy);
		this.get_graphics().lineTo(ex,ey);
		this.get_graphics().lineTo(bx,by);
		this.get_graphics().endFill();
	}
	,drawParentEdge: function(parent,child,d,scale) {
		var x1 = parent.coords.x * scale + scale / 2;
		var y1 = parent.coords.y * scale + scale / 2;
		var x2 = child.coords.x * scale + scale / 2;
		var y2 = child.coords.y * scale + scale / 2;
		if(d == metazelda.util.Direction.N) {
			y1 -= scale / 4;
			y2 += scale / 4;
		} else if(d == metazelda.util.Direction.E) {
			x1 += scale / 4;
			x2 -= scale / 4;
		} else if(d == metazelda.util.Direction.S) {
			y1 += scale / 4;
			y2 -= scale / 4;
		} else if(d == metazelda.util.Direction.W) {
			x1 -= scale / 4;
			x2 += scale / 4;
		}
		var dx = 0;
		var dy = 0;
		if(d == metazelda.util.Direction.N) dx -= scale / 10 | 0; else if(d == metazelda.util.Direction.E) dy += scale / 10 | 0; else if(d == metazelda.util.Direction.S) dx += scale / 10 | 0; else if(d == metazelda.util.Direction.W) dy -= scale / 10 | 0;
		x1 += dx;
		x2 += dx;
		y1 += dy;
		y2 += dy;
		this.drawArrow(x1,y1,x2,y2);
		metazelda.util.Utils.assert(
			Lambda.has(parent.getChildren(),child),null,
			{ fileName : "DungeonView.hx", lineNumber : 103, className 
			: "metazelda.viewer.DungeonView", methodName : "drawParentEdge"});
	}
	,drawEdges: function(dungeon,room,scale) {
		/*this.get_graphics().lineStyle(1);
		var _g = 0;
		var _g1 = metazelda.util.Direction.values();
		while(_g < _g1.length) {
			var d = _g1[_g];
			++_g;
			var oppD = metazelda.util.Direction.oppositeDirection(d);
			var coords = room.coords;
			var nextCoords = coords.nextInDirection(d);
			var nextRoom = dungeon.get(nextCoords);
			if(nextRoom != null && nextRoom.getParent() == room) this.drawParentEdge(room,nextRoom,d,scale);
			var edge = room.getEdge(d);

			if(edge == null) continue;
			var x1 = coords.x * scale + scale / 2;
			var y1 = coords.y * scale + scale / 2;
			var x2 = nextCoords.x * scale + scale / 2;
			var y2 = nextCoords.y * scale + scale / 2;
			if(d == metazelda.util.Direction.N) {
				y1 -= scale / 4;
				y2 += scale / 4;
			} else if(d == metazelda.util.Direction.E) {
				x1 += scale / 4;
				x2 -= scale / 4;
			} else if(d == metazelda.util.Direction.S) {
				y1 += scale / 4;
				y2 -= scale / 4;
			} else if(d == metazelda.util.Direction.W) {
				x1 -= scale / 4;
				x2 += scale / 4;
			}
			if(nextRoom != null && edge.equals(nextRoom.getEdge(oppD))) {
				if(room.coords.compareTo(nextRoom.coords) > 0) continue;



				this.drawLine(x1,y1,x2,y2);
				var midx = (x1 + x2) / 2;
				var midy = (y1 + y2) / 2;
				if(edge.getSymbol() != null) this.addText(midx,midy,edge.getSymbol().toString());
			} else {
				var dx = 0;
				var dy = 0;
				if(d == metazelda.util.Direction.N) dx -= scale / 20 | 0; else if(d == metazelda.util.Direction.E) dy += scale / 20 | 0; else if(d == metazelda.util.Direction.S) dx += scale / 20 | 0; else if(d == metazelda.util.Direction.W) dy -= scale / 20 | 0;
				x1 += dx;
				x2 += dx;
				y1 += dy;
				y2 += dy;
				this.drawArrow(x1,y1,x2,y2,16711680);
				var midx1 = (x1 + x2) / 2;
				var midy1 = (y1 + y2) / 2;
				if(edge.getSymbol() != null) 
					this.addText(midx1,midy1,edge.getSymbol().toString());

			}
		}
		*/

	}
	,drawRoom: function(room,scale) {
		/*var cx = room.coords.x * scale + scale / 2 | 0;
		var cy = room.coords.y * scale + scale / 2 | 0;
		var darkerColor = metazelda.viewer.util.Utils.hsv2int((0.6 - room.getIntensity() * 0.6) * 360,1.0,0.4);
		this.get_graphics().lineStyle(1,darkerColor);
		this.get_graphics().beginFill(metazelda.viewer.util.Utils.hsv2int((0.6 - room.getIntensity() * 0.6) * 360,0.7,1.0));
		this.get_graphics().drawCircle(cx,cy,scale / 4);
		if(room.isGoal()) {
			this.get_graphics().beginFill(metazelda.viewer.util.Utils.hsv2int((0.6 - room.getIntensity() * 0.6) * 360,0.7,1.0));
			this.get_graphics().drawCircle(cx,cy,scale / 5);
		}
	//	this.get_graphics().endFill();
		if(room.getItem() != null) this.addText(cx - 0,cy - 14,room.getItem().toString(),darkerColor);
    this.addText(cx-0,cy-24,room.getID())
		this.addText(cx - 0,cy,(function($this) {
			var $r;
			var _this = Std.string(room.getIntensity());
			$r = HxOverrides.substr(_this,0,4);
			return $r;
		}(this)),darkerColor);*/
	}
	,drawLine: function(x1,y1,x2,y2,color) {
		/*if(color == null) color = 5592405;
		this.get_graphics().lineStyle(1,color);
		this.get_graphics().moveTo(x1,y1);
		this.get_graphics().lineTo(x2,y2);*/
	}
	,addText: function(x,y,text,color) {
		if(color == null) color = 5592405;
		var tf = new flash.text.TextField();
		tf.set_text(text);
		tf.textColor = color;
		tf.set_x(x);
		tf.set_y(y);
		this.addChild(tf);
	}
	,remove: function() {
		if(this.parent != null) this.parent.removeChild(this);
	}
	,__class__: metazelda.viewer.DungeonView
});
metazelda.viewer.util = {};
metazelda.viewer.util.Utils = function() { };
$hxClasses["metazelda.viewer.util.Utils"] = metazelda.viewer.util.Utils;
metazelda.viewer.util.Utils.__name__ = ["metazelda","viewer","util","Utils"];
metazelda.viewer.util.Utils.hsv2int = function(h,s,v) {
	var d = h % 360 / 60;
	if(d < 0) d += 6;
	var hf = Math.floor(d);
	var hi = hf % 6;
	var f = d - hf;
	var v1 = v;
	var p = v1 * (1 - s);
	var q = v1 * (1 - f * s);
	var t = v1 * (1 - (1 - f) * s);
	var rgb = null;
	switch(hi) {
	case 0:
		rgb = { r : v1, g : t, b : p};
		break;
	case 1:
		rgb = { r : q, g : v1, b : p};
		break;
	case 2:
		rgb = { r : p, g : v1, b : t};
		break;
	case 3:
		rgb = { r : p, g : q, b : v1};
		break;
	case 4:
		rgb = { r : t, g : p, b : v1};
		break;
	case 5:
		rgb = { r : v1, g : p, b : q};
		break;
	}
	return (rgb.r * 255 | 0) << 16 | (rgb.g * 255 | 0) << 8 | (rgb.b * 255 | 0);
};
var nme = {};
nme.AssetData = function() { };
$hxClasses["nme.AssetData"] = nme.AssetData;
nme.AssetData.__name__ = ["nme","AssetData"];
nme.AssetData.initialize = function() {
	if(!nme.AssetData.initialized) {
		nme.AssetData.path.set("img/spacemaps/ring.png","img/spacemaps/ring.png");
		var value;
		var s = "image".toUpperCase();
		value = s;
		nme.AssetData.type.set("img/spacemaps/ring.png",value);
		nme.AssetData.path.set("img/spacemaps/skull.png","img/spacemaps/skull.png");
		var value1;
		var s1 = "image".toUpperCase();
		value1 = s1;
		nme.AssetData.type.set("img/spacemaps/skull.png",value1);
		nme.AssetData.path.set("img/spacemaps/tail.png","img/spacemaps/tail.png");
		var value2;
		var s2 = "image".toUpperCase();
		value2 = s2;
		nme.AssetData.type.set("img/spacemaps/tail.png",value2);
		nme.AssetData.path.set("img/spacemaps/turtle.png","img/spacemaps/turtle.png");
		var value3;
		var s3 = "image".toUpperCase();
		value3 = s3;
		nme.AssetData.type.set("img/spacemaps/turtle.png",value3);
		nme.AssetData.initialized = true;
	}
};
var openfl = {};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		nme.AssetData.initialize();
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	var t = nme.AssetData.type;
	var c = openfl.Assets.cachedBitmapData;
	var r;
	var b;
	if(t.exists(id) && t.get(id) == "IMAGE") {
		if(!c.exists(id)) {
			b = ((function($this) {
				var $r;
				var key = nme.AssetData.path.get(id);
				$r = ApplicationMain.loaders.get(key);
				return $r;
			}(this))).contentLoaderInfo.content;
			r = b.bitmapData.clone();
			if(useCache) openfl.Assets.cachedBitmapData.set(id,r);
			return r;
		} else return openfl.Assets.cachedBitmapData.get(id).clone();
	} else null;
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = nme.AssetData.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			var bytes1 = new flash.utils.ByteArray();
			bytes1.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	return null;
};
openfl.Assets.getFont = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id) && nme.AssetData.type.get(id) == "FONT") return js.Boot.__cast(Type.createInstance(nme.AssetData.className.get(id),[]) , flash.text.Font); else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	return null;
};
openfl.Assets.getSound = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var type = nme.AssetData.type.get(id);
		if(type == "SOUND" || type == "MUSIC") return new flash.media.Sound(new flash.net.URLRequest(nme.AssetData.path.get(id)));
	}
	console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	return null;
};
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
};
openfl.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveEnum(name);
};
openfl.Assets.get_id = function() {
	openfl.Assets.initialize();
	var ids = [];
	var $it0 = nme.AssetData.type.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		ids.push(key);
	}
	return ids;
};
openfl.Assets.get_library = function() {
	openfl.Assets.initialize();
	return nme.AssetData.library;
};
openfl.Assets.get_path = function() {
	openfl.Assets.initialize();
	return nme.AssetData.path;
};
openfl.Assets.get_type = function() {
	openfl.Assets.initialize();
	return nme.AssetData.type;
};
openfl._Assets = {};
openfl._Assets.AssetType_Impl_ = function() { };
$hxClasses["openfl._Assets.AssetType_Impl_"] = openfl._Assets.AssetType_Impl_;
openfl._Assets.AssetType_Impl_.__name__ = ["openfl","_Assets","AssetType_Impl_"];
openfl._Assets.AssetType_Impl_._new = function(s) {
	return s;
};
openfl._Assets.AssetType_Impl_.toString = function(this1) {
	return this1;
};
openfl._Assets.AssetType_Impl_.fromString = function(s) {
	return s;
};
openfl._Assets.LibraryType_Impl_ = function() { };
$hxClasses["openfl._Assets.LibraryType_Impl_"] = openfl._Assets.LibraryType_Impl_;
openfl._Assets.LibraryType_Impl_.__name__ = ["openfl","_Assets","LibraryType_Impl_"];
openfl._Assets.LibraryType_Impl_._new = function(s) {
	return s;
};
openfl._Assets.LibraryType_Impl_.toString = function(this1) {
	return this1;
};
openfl._Assets.LibraryType_Impl_.fromString = function(s) {
	return s;
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
flash.display.DisplayObject.remapTouch = new haxe.ds.StringMap();
flash.display.DisplayObject.remapTouch.set("mousedown","touchstart");
flash.display.DisplayObject.remapTouch.set("mousemove","touchmove");
flash.display.DisplayObject.remapTouch.set("mouseup","touchend");
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
flash.Lib.__init();
(function() {
	var a = Event.prototype;
	var b = flash.events.Event.prototype;
	a.clone = b.clone;
	a.isDefaultPrevented = b.isDefaultPrevented;
	a.get_target = b.get_target;
	a.set_target = b.set_target;
	a.get_currentTarget = b.get_currentTarget;
	a.set_currentTarget = b.set_currentTarget;
})();
(function() {
	var o = MouseEvent.prototype;
	var q = flash.events.MouseEvent.prototype;
	o.get_buttonDown = q.get_buttonDown;
	o.get_delta = q.get_delta;
	o.get_stageX = q.get_stageX;
	o.get_stageY = q.get_stageY;
	o.get_localX = q.get_localX;
	o.get_localY = q.get_localY;
	o.get_localPoint = q.get_localPoint;
})();
haxe.Resource.content = [];
de.polygonal.Printf._initialized = false;
de.polygonal.ds.HashKey._counter = 0;
flash.Lib.qTimeStamp = Date.now() + 0;
flash.Lib.mouseX = 0;
flash.Lib.mouseY = 0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.library = new haxe.ds.StringMap();
haxe.ds.ObjectMap.count = 0;
metazelda._Condition.SwitchState_Impl_.EITHER = "EITHER";
metazelda._Condition.SwitchState_Impl_.OFF = "OFF";
metazelda._Condition.SwitchState_Impl_.ON = "ON";
metazelda.Symbol.START = -1;
metazelda.Symbol.GOAL = -2;
metazelda.Symbol.BOSS = -3;
metazelda.Symbol.SWITCH_ON = -4;
metazelda.Symbol.SWITCH_OFF = -5;
metazelda.Symbol.SWITCH = -6;
metazelda.constraints.SpaceConstraints.DEFAULT_MAX_KEYS = 4;
metazelda.constraints.SpaceConstraints.DEFAULT_MAX_SWITCHES = 1;
metazelda.generators.DungeonGenerator.MAX_RETRIES = 20;
metazelda.generators.DungeonGenerator.INTENSITY_GROWTH_JITTER = 0.1;
metazelda.generators.DungeonGenerator.INTENSITY_EASE_OFF = 0.2;
metazelda.generators.LinearDungeonGenerator.MAX_ATTEMPTS = 10;
metazelda.util.Direction.N = new metazelda.util.Direction(0,0,-1);
metazelda.util.Direction.E = new metazelda.util.Direction(1,1,0);
metazelda.util.Direction.S = new metazelda.util.Direction(2,0,1);
metazelda.util.Direction.W = new metazelda.util.Direction(3,-1,0);
metazelda.util.Direction.NUM_DIRS = 4;
metazelda.util.Utils.MAX_VALUE = 2147483647;
nme.AssetData.className = new haxe.ds.StringMap();
nme.AssetData.library = new haxe.ds.StringMap();
nme.AssetData.path = new haxe.ds.StringMap();
nme.AssetData.type = new haxe.ds.StringMap();
nme.AssetData.initialized = false;
openfl.Assets.cachedBitmapData = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
ApplicationMain.main();

export default Rooms