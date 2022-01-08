(function () {
var modern = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var isBrandingEnabled = function (editor) {
    return editor.getParam('branding', true, 'boolean');
  };
  var hasMenubar = function (editor) {
    return getMenubar(editor) !== false;
  };
  var getMenubar = function (editor) {
    return editor.getParam('menubar');
  };
  var hasStatusbar = function (editor) {
    return editor.getParam('statusbar', true, 'boolean');
  };
  var getToolbarSize = function (editor) {
    return editor.getParam('toolbar_items_size');
  };
  var isReadOnly = function (editor) {
    return editor.getParam('readonly', false, 'boolean');
  };
  var getFixedToolbarContainer = function (editor) {
    return editor.getParam('fixed_toolbar_container');
  };
  var getInlineToolbarPositionHandler = function (editor) {
    return editor.getParam('inline_toolbar_position_handler');
  };
  var getMenu = function (editor) {
    return editor.getParam('menu');
  };
  var getRemovedMenuItems = function (editor) {
    return editor.getParam('removed_menuitems', '');
  };
  var getMinWidth = function (editor) {
    return editor.getParam('min_width', 100, 'number');
  };
  var getMinHeight = function (editor) {
    return editor.getParam('min_height', 100, 'number');
  };
  var getMaxWidth = function (editor) {
    return editor.getParam('max_width', 65535, 'number');
  };
  var getMaxHeight = function (editor) {
    return editor.getParam('max_height', 65535, 'number');
  };
  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var isInline = function (editor) {
    return editor.getParam('inline', false, 'boolean');
  };
  var getResize = function (editor) {
    var resize = editor.getParam('resize', 'vertical');
    if (resize === false) {
      return 'none';
    } else if (resize === 'both') {
      return 'both';
    } else {
      return 'vertical';
    }
  };
  var getSkinUrl = function (editor) {
    var settings = editor.settings;
    var skin = settings.skin;
    var skinUrl = settings.skin_url;
    if (skin !== false) {
      var skinName = skin ? skin : 'lightgray';
      if (skinUrl) {
        skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
      } else {
        skinUrl = global$1.baseURL + '/skins/' + skinName;
      }
    }
    return skinUrl;
  };
  var getIndexedToolbars = function (settings, defaultToolbar) {
    var toolbars = [];
    for (var i = 1; i < 10; i++) {
      var toolbar = settings['toolbar' + i];
      if (!toolbar) {
        break;
      }
      toolbars.push(toolbar);
    }
    var mainToolbar = settings.toolbar ? [settings.toolbar] : [defaultToolbar];
    return toolbars.length > 0 ? toolbars : mainToolbar;
  };
  var getToolbars = function (editor) {
    var toolbar = editor.getParam('toolbar');
    var defaultToolbar = 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image';
    if (toolbar === false) {
      return [];
    } else if (global$2.isArray(toolbar)) {
      return global$2.grep(toolbar, function (toolbar) {
        return toolbar.length > 0;
      });
    } else {
      return getIndexedToolbars(editor.settings, defaultToolbar);
    }
  };

  var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var global$4 = tinymce.util.Tools.resolve('tinymce.ui.Factory');

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.I18n');

  var fireSkinLoaded = function (editor) {
    return editor.fire('SkinLoaded');
  };
  var fireResizeEditor = function (editor) {
    return editor.fire('ResizeEditor');
  };
  var fireBeforeRenderUI = function (editor) {
    return editor.fire('BeforeRenderUI');
  };
  var $_5hpmustzjjgwefnb = {
    fireSkinLoaded: fireSkinLoaded,
    fireResizeEditor: fireResizeEditor,
    fireBeforeRenderUI: fireBeforeRenderUI
  };

  var focus = function (panel, type) {
    return function () {
      var item = panel.find(type)[0];
      if (item) {
        item.focus(true);
      }
    };
  };
  var addKeys = function (editor, panel) {
    editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
    editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
    editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
    panel.on('cancel', function () {
      editor.focus();
    });
  };
  var $_azwbz4u0jjgwefnc = { addKeys: addKeys };

  var global$6 = tinymce.util.Tools.resolve('tinymce.geom.Rect');

  var global$7 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var noop = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      x[_i] = arguments[_i];
    }
  };

  var compose = function (fa, fb) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };


  var curry = function (f) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      x[_i - 1] = arguments[_i];
    }
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };




  var never = constant(false);
  var always = constant(true);

  var never$1 = never;
  var always$1 = always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call$$1 = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop$$1 = function () {
    };
    var nul = function () {
      return null;
    };
    var undef = function () {
      return undefined;
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call$$1,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      getOrNull: nul,
      getOrUndefined: undef,
      or: id,
      orThunk: call$$1,
      map: none,
      ap: none,
      each: noop$$1,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      getOrNull: constant_a,
      getOrUndefined: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var getUiContainerDelta = function (ctrl) {
    var uiContainer = getUiContainer(ctrl);
    if (uiContainer && global$3.DOM.getStyle(uiContainer, 'position', true) !== 'static') {
      var containerPos = global$3.DOM.getPos(uiContainer);
      var dx = uiContainer.scrollLeft - containerPos.x;
      var dy = uiContainer.scrollTop - containerPos.y;
      return Option.some({
        x: dx,
        y: dy
      });
    } else {
      return Option.none();
    }
  };
  var setUiContainer = function (editor, ctrl) {
    var uiContainer = global$3.DOM.select(editor.settings.ui_container)[0];
    ctrl.getRoot().uiContainer = uiContainer;
  };
  var getUiContainer = function (ctrl) {
    return ctrl ? ctrl.getRoot().uiContainer : null;
  };
  var inheritUiContainer = function (fromCtrl, toCtrl) {
    return toCtrl.uiContainer = getUiContainer(fromCtrl);
  };
  var $_6344qfu4jjgwefnr = {
    getUiContainerDelta: getUiContainerDelta,
    setUiContainer: setUiContainer,
    getUiContainer: getUiContainer,
    inheritUiContainer: inheritUiContainer
  };

  var createToolbar = function (editor, items, size) {
    var toolbarItems = [];
    var buttonGroup;
    if (!items) {
      return;
    }
    global$2.each(items.split(/[ ,]/), function (item) {
      var itemName;
      var bindSelectorChanged = function () {
        var selection = editor.selection;
        if (item.settings.stateSelector) {
          selection.selectorChanged(item.settings.stateSelector, function (state) {
            item.active(state);
          }, true);
        }
        if (item.settings.disabledStateSelector) {
          selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
            item.disabled(state);
          });
        }
      };
      if (item === '|') {
        buttonGroup = null;
      } else {
        if (!buttonGroup) {
          buttonGroup = {
            type: 'buttongroup',
            items: []
          };
          toolbarItems.push(buttonGroup);
        }
        if (editor.buttons[item]) {
          itemName = item;
          item = editor.buttons[itemName];
          if (typeof item === 'function') {
            item = item();
          }
          item.type = item.type || 'button';
          item.size = size;
          item = global$4.create(item);
          buttonGroup.items.push(item);
          if (editor.initialized) {
            bindSelectorChanged();
          } else {
            editor.on('init', bindSelectorChanged);
          }
        }
      }
    });
    return {
      type: 'toolbar',
      layout: 'flow',
      items: toolbarItems
    };
  };
  var createToolbars = function (editor, size) {
    var toolbars = [];
    var addToolbar = function (items) {
      if (items) {
        toolbars.push(createToolbar(editor, items, size));
      }
    };
    global$2.each(getToolbars(editor), function (toolbar) {
      addToolbar(toolbar);
    });
    if (toolbars.length) {
      return {
        type: 'panel',
        layout: 'stack',
        classes: 'toolbar-grp',
        ariaRoot: true,
        ariaRemember: true,
        items: toolbars
      };
    }
  };
  var $_4udolhu7jjgwefo1 = {
    createToolbar: createToolbar,
    createToolbars: createToolbars
  };

  var DOM = global$3.DOM;
  var toClientRect = function (geomRect) {
    return {
      left: geomRect.x,
      top: geomRect.y,
      width: geomRect.w,
      height: geomRect.h,
      right: geomRect.x + geomRect.w,
      bottom: geomRect.y + geomRect.h
    };
  };
  var hideAllFloatingPanels = function (editor) {
    global$2.each(editor.contextToolbars, function (toolbar) {
      if (toolbar.panel) {
        toolbar.panel.hide();
      }
    });
  };
  var movePanelTo = function (panel, pos) {
    panel.moveTo(pos.left, pos.top);
  };
  var togglePositionClass = function (panel, relPos, predicate) {
    relPos = relPos ? relPos.substr(0, 2) : '';
    global$2.each({
      t: 'down',
      b: 'up'
    }, function (cls, pos) {
      panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
    });
    global$2.each({
      l: 'left',
      r: 'right'
    }, function (cls, pos) {
      panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
    });
  };
  var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
    panelRect = toClientRect({
      x: x,
      y: y,
      w: panelRect.w,
      h: panelRect.h
    });
    if (handler) {
      panelRect = handler({
        elementRect: toClientRect(elementRect),
        contentAreaRect: toClientRect(contentAreaRect),
        panelRect: panelRect
      });
    }
    return panelRect;
  };
  var addContextualToolbars = function (editor) {
    var scrollContainer;
    var getContextToolbars = function () {
      return editor.contextToolbars || [];
    };
    var getElementRect = function (elm) {
      var pos, targetRect, root;
      pos = DOM.getPos(editor.getContentAreaContainer());
      targetRect = editor.dom.getRect(elm);
      root = editor.dom.getRoot();
      if (root.nodeName === 'BODY') {
        targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
        targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
      }
      targetRect.x += pos.x;
      targetRect.y += pos.y;
      return targetRect;
    };
    var reposition = function (match, shouldShow) {
      var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
      var handler = getInlineToolbarPositionHandler(editor);
      if (editor.removed) {
        return;
      }
      if (!match || !match.toolbar.panel) {
        hideAllFloatingPanels(editor);
        return;
      }
      testPositions = [
        'bc-tc',
        'tc-bc',
        'tl-bl',
        'bl-tl',
        'tr-br',
        'br-tr'
      ];
      panel = match.toolbar.panel;
      if (shouldShow) {
        panel.show();
      }
      elementRect = getElementRect(match.element);
      panelRect = DOM.getRect(panel.getEl());
      contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
      var delta = $_6344qfu4jjgwefnr.getUiContainerDelta(panel).getOr({
        x: 0,
        y: 0
      });
      elementRect.x += delta.x;
      elementRect.y += delta.y;
      panelRect.x += delta.x;
      panelRect.y += delta.y;
      contentAreaRect.x += delta.x;
      contentAreaRect.y += delta.y;
      smallElementWidthThreshold = 25;
      if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
        var clientRect = match.element.getBoundingClientRect();
        elementRect.w = clientRect.width;
        elementRect.h = clientRect.height;
      }
      if (!editor.inline) {
        contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
      }
      if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
        elementRect = global$6.inflate(elementRect, 0, 8);
      }
      relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
      elementRect = global$6.clamp(elementRect, contentAreaRect);
      if (relPos) {
        relRect = global$6.relativePosition(panelRect, elementRect, relPos);
        movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
      } else {
        contentAreaRect.h += panelRect.h;
        elementRect = global$6.intersect(contentAreaRect, elementRect);
        if (elementRect) {
          relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
            'bc-tc',
            'bl-tl',
            'br-tr'
          ]);
          if (relPos) {
            relRect = global$6.relativePosition(panelRect, elementRect, relPos);
            movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
          } else {
            movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
          }
        } else {
          panel.hide();
        }
      }
      togglePositionClass(panel, relPos, function (pos1, pos2) {
        return pos1 === pos2;
      });
    };
    var repositionHandler = function (show) {
      return function () {
        var execute = function () {
          if (editor.selection) {
            reposition(findFrontMostMatch(editor.selection.getNode()), show);
          }
        };
        global$7.requestAnimationFrame(execute);
      };
    };
    var bindScrollEvent = function (panel) {
      if (!scrollContainer) {
        var reposition_1 = repositionHandler(true);
        var uiContainer_1 = $_6344qfu4jjgwefnr.getUiContainer(panel);
        scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
        DOM.bind(scrollContainer, 'scroll', reposition_1);
        DOM.bind(uiContainer_1, 'scroll', reposition_1);
        editor.on('remove', function () {
          DOM.unbind(scrollContainer, 'scroll', reposition_1);
          DOM.unbind(uiContainer_1, 'scroll', reposition_1);
        });
      }
    };
    var showContextToolbar = function (match) {
      var panel;
      if (match.toolbar.panel) {
        match.toolbar.panel.show();
        reposition(match);
        return;
      }
      panel = global$4.create({
        type: 'floatpanel',
        role: 'dialog',
        classes: 'tinymce tinymce-inline arrow',
        ariaLabel: 'Inline toolbar',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        autohide: false,
        autofix: true,
        fixed: true,
        border: 1,
        items: $_4udolhu7jjgwefo1.createToolbar(editor, match.toolbar.items),
        oncancel: function () {
          editor.focus();
        }
      });
      $_6344qfu4jjgwefnr.setUiContainer(editor, panel);
      bindScrollEvent(panel);
      match.toolbar.panel = panel;
      panel.renderTo().reflow();
      reposition(match);
    };
    var hideAllContextToolbars = function () {
      global$2.each(getContextToolbars(), function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.hide();
        }
      });
    };
    var findFrontMostMatch = function (targetElm) {
      var i, y, parentsAndSelf;
      var toolbars = getContextToolbars();
      parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
      for (i = parentsAndSelf.length - 1; i >= 0; i--) {
        for (y = toolbars.length - 1; y >= 0; y--) {
          if (toolbars[y].predicate(parentsAndSelf[i])) {
            return {
              toolbar: toolbars[y],
              element: parentsAndSelf[i]
            };
          }
        }
      }
      return null;
    };
    editor.on('click keyup setContent ObjectResized', function (e) {
      if (e.type === 'setcontent' && !e.selection) {
        return;
      }
      global$7.setEditorTimeout(editor, function () {
        var match;
        match = findFrontMostMatch(editor.selection.getNode());
        if (match) {
          hideAllContextToolbars();
          showContextToolbar(match);
        } else {
          hideAllContextToolbars();
        }
      });
    });
    editor.on('blur hide contextmenu', hideAllContextToolbars);
    editor.on('ObjectResizeStart', function () {
      var match = findFrontMostMatch(editor.selection.getNode());
      if (match && match.toolbar.panel) {
        match.toolbar.panel.hide();
      }
    });
    editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
    editor.on('nodeChange', repositionHandler(false));
    editor.on('remove', function () {
      global$2.each(getContextToolbars(), function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.remove();
        }
      });
      editor.contextToolbars = {};
    });
    editor.shortcuts.add('ctrl+shift+e > ctrl+shift+p', '', function () {
      var match = findFrontMostMatch(editor.selection.getNode());
      if (match && match.toolbar.panel) {
        match.toolbar.panel.items()[0].focus();
      }
    });
  };
  var $_g1gegqu1jjgwefne = { addContextualToolbars: addContextualToolbars };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };






  var isFunction = isType('function');
  var isNumber = isType('number');

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };

  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };


  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };


  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };


  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };



  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };






  var from$1 = isFunction(Array.from) ? Array.from : function (x) {
    return slice.call(x);
  };

  var defaultMenus = {
    file: {
      title: 'File',
      items: 'newdocument restoredraft | preview | print'
    },
    edit: {
      title: 'Edit',
      items: 'undo redo | cut copy paste pastetext | selectall'
    },
    view: {
      title: 'View',
      items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'
    },
    insert: {
      title: 'Insert',
      items: 'image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime'
    },
    format: {
      title: 'Format',
      items: 'bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat'
    },
    tools: {
      title: 'Tools',
      items: 'spellchecker spellcheckerlanguage | a11ycheck code'
    },
    table: { title: 'Table' },
    help: { title: 'Help' }
  };
  var delimiterMenuNamePair = function () {
    return {
      name: '|',
      item: { text: '|' }
    };
  };
  var createMenuNameItemPair = function (name, item) {
    var menuItem = item ? {
      name: name,
      item: item
    } : null;
    return name === '|' ? delimiterMenuNamePair() : menuItem;
  };
  var hasItemName = function (namedMenuItems, name) {
    return findIndex(namedMenuItems, function (namedMenuItem) {
      return namedMenuItem.name === name;
    }).isSome();
  };
  var isSeparator = function (namedMenuItem) {
    return namedMenuItem && namedMenuItem.item.text === '|';
  };
  var cleanupMenu = function (namedMenuItems, removedMenuItems) {
    var menuItemsPass1 = filter(namedMenuItems, function (namedMenuItem) {
      return removedMenuItems.hasOwnProperty(namedMenuItem.name) === false;
    });
    var menuItemsPass2 = filter(menuItemsPass1, function (namedMenuItem, i, namedMenuItems) {
      return !isSeparator(namedMenuItem) || !isSeparator(namedMenuItems[i - 1]);
    });
    return filter(menuItemsPass2, function (namedMenuItem, i, namedMenuItems) {
      return !isSeparator(namedMenuItem) || i > 0 && i < namedMenuItems.length - 1;
    });
  };
  var createMenu = function (editorMenuItems, menus, removedMenuItems, context) {
    var menuButton, menu, namedMenuItems, isUserDefined;
    if (menus) {
      menu = menus[context];
      isUserDefined = true;
    } else {
      menu = defaultMenus[context];
    }
    if (menu) {
      menuButton = { text: menu.title };
      namedMenuItems = [];
      global$2.each((menu.items || '').split(/[ ,]/), function (name) {
        var namedMenuItem = createMenuNameItemPair(name, editorMenuItems[name]);
        if (namedMenuItem) {
          namedMenuItems.push(namedMenuItem);
        }
      });
      if (!isUserDefined) {
        global$2.each(editorMenuItems, function (item, name) {
          if (item.context === context && !hasItemName(namedMenuItems, name)) {
            if (item.separator === 'before') {
              namedMenuItems.push(delimiterMenuNamePair());
            }
            if (item.prependToContext) {
              namedMenuItems.unshift(createMenuNameItemPair(name, item));
            } else {
              namedMenuItems.push(createMenuNameItemPair(name, item));
            }
            if (item.separator === 'after') {
              namedMenuItems.push(delimiterMenuNamePair());
            }
          }
        });
      }
      menuButton.menu = map(cleanupMenu(namedMenuItems, removedMenuItems), function (menuItem) {
        return menuItem.item;
      });
      if (!menuButton.menu.length) {
        return null;
      }
    }
    return menuButton;
  };
  var getDefaultMenubar = function (editor) {
    var name;
    var defaultMenuBar = [];
    var menu = getMenu(editor);
    if (menu) {
      for (name in menu) {
        defaultMenuBar.push(name);
      }
    } else {
      for (name in defaultMenus) {
        defaultMenuBar.push(name);
      }
    }
    return defaultMenuBar;
  };
  var createMenuButtons = function (editor) {
    var menuButtons = [];
    var defaultMenuBar = getDefaultMenubar(editor);
    var removedMenuItems = global$2.makeMap(getRemovedMenuItems(editor).split(/[ ,]/));
    var menubar = getMenubar(editor);
    var enabledMenuNames = typeof menubar === 'string' ? menubar.split(/[ ,]/) : defaultMenuBar;
    for (var i = 0; i < enabledMenuNames.length; i++) {
      var menuItems = enabledMenuNames[i];
      var menu = createMenu(editor.menuItems, getMenu(editor), removedMenuItems, menuItems);
      if (menu) {
        menuButtons.push(menu);
      }
    }
    return menuButtons;
  };
  var $_bahgsqu8jjgwefo4 = { createMenuButtons: createMenuButtons };

  var DOM$1 = global$3.DOM;
  var getSize = function (elm) {
    return {
      width: elm.clientWidth,
      height: elm.clientHeight
    };
  };
  var resizeTo = function (editor, width, height) {
    var containerElm, iframeElm, containerSize, iframeSize;
    containerElm = editor.getContainer();
    iframeElm = editor.getContentAreaContainer().firstChild;
    containerSize = getSize(containerElm);
    iframeSize = getSize(iframeElm);
    if (width !== null) {
      width = Math.max(getMinWidth(editor), width);
      width = Math.min(getMaxWidth(editor), width);
      DOM$1.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
      DOM$1.setStyle(iframeElm, 'width', width);
    }
    height = Math.max(getMinHeight(editor), height);
    height = Math.min(getMaxHeight(editor), height);
    DOM$1.setStyle(iframeElm, 'height', height);
    $_5hpmustzjjgwefnb.fireResizeEditor(editor);
  };
  var resizeBy = function (editor, dw, dh) {
    var elm = editor.getContentAreaContainer();
    resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
  };
  var $_sd6u0ubjjgwefok = {
    resizeTo: resizeTo,
    resizeBy: resizeBy
  };

  var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

  var api = function (elm) {
    return {
      element: function () {
        return elm;
      }
    };
  };
  var trigger = function (sidebar, panel, callbackName) {
    var callback = sidebar.settings[callbackName];
    if (callback) {
      callback(api(panel.getEl('body')));
    }
  };
  var hidePanels = function (name, container, sidebars) {
    global$2.each(sidebars, function (sidebar) {
      var panel = container.items().filter('#' + sidebar.name)[0];
      if (panel && panel.visible() && sidebar.name !== name) {
        trigger(sidebar, panel, 'onhide');
        panel.visible(false);
      }
    });
  };
  var deactivateButtons = function (toolbar) {
    toolbar.items().each(function (ctrl) {
      ctrl.active(false);
    });
  };
  var findSidebar = function (sidebars, name) {
    return global$2.grep(sidebars, function (sidebar) {
      return sidebar.name === name;
    })[0];
  };
  var showPanel = function (editor, name, sidebars) {
    return function (e) {
      var btnCtrl = e.control;
      var container = btnCtrl.parents().filter('panel')[0];
      var panel = container.find('#' + name)[0];
      var sidebar = findSidebar(sidebars, name);
      hidePanels(name, container, sidebars);
      deactivateButtons(btnCtrl.parent());
      if (panel && panel.visible()) {
        trigger(sidebar, panel, 'onhide');
        panel.hide();
        btnCtrl.active(false);
      } else {
        if (panel) {
          panel.show();
          trigger(sidebar, panel, 'onshow');
        } else {
          panel = global$4.create({
            type: 'container',
            name: name,
            layout: 'stack',
            classes: 'sidebar-panel',
            html: ''
          });
          container.prepend(panel);
          trigger(sidebar, panel, 'onrender');
          trigger(sidebar, panel, 'onshow');
        }
        btnCtrl.active(true);
      }
      $_5hpmustzjjgwefnb.fireResizeEditor(editor);
    };
  };
  var isModernBrowser = function () {
    return !global$8.ie || global$8.ie >= 11;
  };
  var hasSidebar = function (editor) {
    return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
  };
  var createSidebar = function (editor) {
    var buttons = global$2.map(editor.sidebars, function (sidebar) {
      var settings = sidebar.settings;
      return {
        type: 'button',
        icon: settings.icon,
        image: settings.image,
        tooltip: settings.tooltip,
        onclick: showPanel(editor, sidebar.name, editor.sidebars)
      };
    });
    return {
      type: 'panel',
      name: 'sidebar',
      layout: 'stack',
      classes: 'sidebar',
      items: [{
          type: 'toolbar',
          layout: 'stack',
          classes: 'sidebar-toolbar',
          items: buttons
        }]
    };
  };
  var $_b7ut9jucjjgwefom = {
    hasSidebar: hasSidebar,
    createSidebar: createSidebar
  };

  var fireSkinLoaded$1 = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      $_5hpmustzjjgwefnb.fireSkinLoaded(editor);
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_awdosmuejjgwefop = { fireSkinLoaded: fireSkinLoaded$1 };

  var DOM$2 = global$3.DOM;
  var switchMode = function (panel) {
    return function (e) {
      panel.find('*').disabled(e.mode === 'readonly');
    };
  };
  var editArea = function (border) {
    return {
      type: 'panel',
      name: 'iframe',
      layout: 'stack',
      classes: 'edit-area',
      border: border,
      html: ''
    };
  };
  var editAreaContainer = function (editor) {
    return {
      type: 'panel',
      layout: 'stack',
      classes: 'edit-aria-container',
      border: '1 0 0 0',
      items: [
        editArea('0'),
        $_b7ut9jucjjgwefom.createSidebar(editor)
      ]
    };
  };
  var render = function (editor, theme, args) {
    var panel, resizeHandleCtrl, startSize;
    if (isSkinDisabled(editor) === false && args.skinUiCss) {
      DOM$2.styleSheetLoader.load(args.skinUiCss, $_awdosmuejjgwefop.fireSkinLoaded(editor));
    } else {
      $_awdosmuejjgwefop.fireSkinLoaded(editor)();
    }
    panel = theme.panel = global$4.create({
      type: 'panel',
      role: 'application',
      classes: 'tinymce',
      style: 'visibility: hidden',
      layout: 'stack',
      border: 1,
      items: [
        {
          type: 'container',
          classes: 'top-part',
          items: [
            hasMenubar(editor) === false ? null : {
              type: 'menubar',
              border: '0 0 1 0',
              items: $_bahgsqu8jjgwefo4.createMenuButtons(editor)
            },
            $_4udolhu7jjgwefo1.createToolbars(editor, getToolbarSize(editor))
          ]
        },
        $_b7ut9jucjjgwefom.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
      ]
    });
    $_6344qfu4jjgwefnr.setUiContainer(editor, panel);
    if (getResize(editor) !== 'none') {
      resizeHandleCtrl = {
        type: 'resizehandle',
        direction: getResize(editor),
        onResizeStart: function () {
          var elm = editor.getContentAreaContainer().firstChild;
          startSize = {
            width: elm.clientWidth,
            height: elm.clientHeight
          };
        },
        onResize: function (e) {
          if (getResize(editor) === 'both') {
            $_sd6u0ubjjgwefok.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
          } else {
            $_sd6u0ubjjgwefok.resizeTo(editor, null, startSize.height + e.deltaY);
          }
        }
      };
    }
    if (hasStatusbar(editor)) {
      var linkHtml = '<a href="https://www.tinymce.com/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">tinymce</a>';
      var html = global$5.translate([
        'Powered by {0}',
        linkHtml
      ]);
      var brandingLabel = isBrandingEnabled(editor) ? {
        type: 'label',
        classes: 'branding',
        html: ' ' + html
      } : null;
      panel.add({
        type: 'panel',
        name: 'statusbar',
        classes: 'statusbar',
        layout: 'flow',
        border: '1 0 0 0',
        ariaRoot: true,
        items: [
          {
            type: 'elementpath',
            editor: editor
          },
          resizeHandleCtrl,
          brandingLabel
        ]
      });
    }
    $_5hpmustzjjgwefnb.fireBeforeRenderUI(editor);
    editor.on('SwitchMode', switchMode(panel));
    panel.renderBefore(args.targetNode).reflow();
    if (isReadOnly(editor)) {
      editor.setMode('readonly');
    }
    if (args.width) {
      DOM$2.setStyle(panel.getEl(), 'width', args.width);
    }
    editor.on('remove', function () {
      panel.remove();
      panel = null;
    });
    $_azwbz4u0jjgwefnc.addKeys(editor, panel);
    $_g1gegqu1jjgwefne.addContextualToolbars(editor);
    return {
      iframeContainer: panel.find('#iframe')[0].getEl(),
      editorContainer: panel.getEl()
    };
  };
  var $_vxdgetvjjgwefn7 = { render: render };

  var global$9 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

  var count = 0;
  var funcs = {
    id: function () {
      return 'mceu_' + count++;
    },
    create: function (name$$1, attrs, children) {
      var elm = document.createElement(name$$1);
      global$3.DOM.setAttribs(elm, attrs);
      if (typeof children === 'string') {
        elm.innerHTML = children;
      } else {
        global$2.each(children, function (child) {
          if (child.nodeType) {
            elm.appendChild(child);
          }
        });
      }
      return elm;
    },
    createFragment: function (html) {
      return global$3.DOM.createFragment(html);
    },
    getWindowSize: function () {
      return global$3.DOM.getViewPort();
    },
    getSize: function (elm) {
      var width, height;
      if (elm.getBoundingClientRect) {
        var rect = elm.getBoundingClientRect();
        width = Math.max(rect.width || rect.right - rect.left, elm.offsetWidth);
        height = Math.max(rect.height || rect.bottom - rect.bottom, elm.offsetHeight);
      } else {
        width = elm.offsetWidth;
        height = elm.offsetHeight;
      }
      return {
        width: width,
        height: height
      };
    },
    getPos: function (elm, root) {
      return global$3.DOM.getPos(elm, root || funcs.getContainer());
    },
    getContainer: function () {
      return global$8.container ? global$8.container : document.body;
    },
    getViewPort: function (win) {
      return global$3.DOM.getViewPort(win);
    },
    get: function (id) {
      return document.getElementById(id);
    },
    addClass: function (elm, cls) {
      return global$3.DOM.addClass(elm, cls);
    },
    removeClass: function (elm, cls) {
      return global$3.DOM.removeClass(elm, cls);
    },
    hasClass: function (elm, cls) {
      return global$3.DOM.hasClass(elm, cls);
    },
    toggleClass: function (elm, cls, state) {
      return global$3.DOM.toggleClass(elm, cls, state);
    },
    css: function (elm, name$$1, value) {
      return global$3.DOM.setStyle(elm, name$$1, value);
    },
    getRuntimeStyle: function (elm, name$$1) {
      return global$3.DOM.getStyle(elm, name$$1, true);
    },
    on: function (target, name$$1, callback, scope) {
      return global$3.DOM.bind(target, name$$1, callback, scope);
    },
    off: function (target, name$$1, callback) {
      return global$3.DOM.unbind(target, name$$1, callback);
    },
    fire: function (target, name$$1, args) {
      return global$3.DOM.fire(target, name$$1, args);
    },
    innerHtml: function (elm, html) {
      global$3.DOM.setHTML(elm, html);
    }
  };

  var isStatic = function (elm) {
    return funcs.getRuntimeStyle(elm, 'position') === 'static';
  };
  var isFixed = function (ctrl) {
    return ctrl.state.get('fixed');
  };
  function calculateRelativePosition(ctrl, targetElm, rel) {
    var ctrlElm, pos, x, y, selfW, selfH, targetW, targetH, viewport, size;
    viewport = getWindowViewPort();
    pos = funcs.getPos(targetElm, $_6344qfu4jjgwefnr.getUiContainer(ctrl));
    x = pos.x;
    y = pos.y;
    if (isFixed(ctrl) && isStatic(document.body)) {
      x -= viewport.x;
      y -= viewport.y;
    }
    ctrlElm = ctrl.getEl();
    size = funcs.getSize(ctrlElm);
    selfW = size.width;
    selfH = size.height;
    size = funcs.getSize(targetElm);
    targetW = size.width;
    targetH = size.height;
    rel = (rel || '').split('');
    if (rel[0] === 'b') {
      y += targetH;
    }
    if (rel[1] === 'r') {
      x += targetW;
    }
    if (rel[0] === 'c') {
      y += Math.round(targetH / 2);
    }
    if (rel[1] === 'c') {
      x += Math.round(targetW / 2);
    }
    if (rel[3] === 'b') {
      y -= selfH;
    }
    if (rel[4] === 'r') {
      x -= selfW;
    }
    if (rel[3] === 'c') {
      y -= Math.round(selfH / 2);
    }
    if (rel[4] === 'c') {
      x -= Math.round(selfW / 2);
    }
    return {
      x: x,
      y: y,
      w: selfW,
      h: selfH
    };
  }
  var getUiContainerViewPort = function (customUiContainer) {
    return {
      x: 0,
      y: 0,
      w: customUiContainer.scrollWidth - 1,
      h: customUiContainer.scrollHeight - 1
    };
  };
  var getWindowViewPort = function () {
    var win = window;
    var x = Math.max(win.pageXOffset, document.body.scrollLeft, document.documentElement.scrollLeft);
    var y = Math.max(win.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
    var w = win.innerWidth || document.documentElement.clientWidth;
    var h = win.innerHeight || document.documentElement.clientHeight;
    return {
      x: x,
      y: y,
      w: x + w,
      h: y + h
    };
  };
  var getViewPortRect = function (ctrl) {
    var customUiContainer = $_6344qfu4jjgwefnr.getUiContainer(ctrl);
    return customUiContainer && !isFixed(ctrl) ? getUiContainerViewPort(customUiContainer) : getWindowViewPort();
  };
  var $_3fnh5iukjjgwefpt = {
    testMoveRel: function (elm, rels) {
      var viewPortRect = getViewPortRect(this);
      for (var i = 0; i < rels.length; i++) {
        var pos = calculateRelativePosition(this, elm, rels[i]);
        if (isFixed(this)) {
          if (pos.x > 0 && pos.x + pos.w < viewPortRect.w && pos.y > 0 && pos.y + pos.h < viewPortRect.h) {
            return rels[i];
          }
        } else {
          if (pos.x > viewPortRect.x && pos.x + pos.w < viewPortRect.w && pos.y > viewPortRect.y && pos.y + pos.h < viewPortRect.h) {
            return rels[i];
          }
        }
      }
      return rels[0];
    },
    moveRel: function (elm, rel) {
      if (typeof rel !== 'string') {
        rel = this.testMoveRel(elm, rel);
      }
      var pos = calculateRelativePosition(this, elm, rel);
      return this.moveTo(pos.x, pos.y);
    },
    moveBy: function (dx, dy) {
      var self$$1 = this, rect = self$$1.layoutRect();
      self$$1.moveTo(rect.x + dx, rect.y + dy);
      return self$$1;
    },
    moveTo: function (x, y) {
      var self$$1 = this;
      function constrain(value, max, size) {
        if (value < 0) {
          return 0;
        }
        if (value + size > max) {
          value = max - size;
          return value < 0 ? 0 : value;
        }
        return value;
      }
      if (self$$1.settings.constrainToViewport) {
        var viewPortRect = getViewPortRect(this);
        var layoutRect = self$$1.layoutRect();
        x = constrain(x, viewPortRect.w, layoutRect.w);
        y = constrain(y, viewPortRect.h, layoutRect.h);
      }
      var uiContainer = $_6344qfu4jjgwefnr.getUiContainer(self$$1);
      if (uiContainer && isStatic(uiContainer) && !isFixed(self$$1)) {
        x -= uiContainer.scrollLeft;
        y -= uiContainer.scrollTop;
      }
      if (uiContainer) {
        x += 1;
        y += 1;
      }
      if (self$$1.state.get('rendered')) {
        self$$1.layoutRect({
          x: x,
          y: y
        }).repaint();
      } else {
        self$$1.settings.x = x;
        self$$1.settings.y = y;
      }
      self$$1.fire('move', {
        x: x,
        y: y
      });
      return self$$1;
    }
  };

  var global$10 = tinymce.util.Tools.resolve('tinymce.util.Class');

  var global$11 = tinymce.util.Tools.resolve('tinymce.util.EventDispatcher');

  var $_fbr241uqjjgwefqo = {
    parseBox: function (value) {
      var len;
      var radix = 10;
      if (!value) {
        return;
      }
      if (typeof value === 'number') {
        value = value || 0;
        return {
          top: value,
          left: value,
          bottom: value,
          right: value
        };
      }
      value = value.split(' ');
      len = value.length;
      if (len === 1) {
        value[1] = value[2] = value[3] = value[0];
      } else if (len === 2) {
        value[2] = value[0];
        value[3] = value[1];
      } else if (len === 3) {
        value[3] = value[1];
      }
      return {
        top: parseInt(value[0], radix) || 0,
        right: parseInt(value[1], radix) || 0,
        bottom: parseInt(value[2], radix) || 0,
        left: parseInt(value[3], radix) || 0
      };
    },
    measureBox: function (elm, prefix) {
      function getStyle(name) {
        var defaultView = elm.ownerDocument.defaultView;
        if (defaultView) {
          var computedStyle = defaultView.getComputedStyle(elm, null);
          if (computedStyle) {
            name = name.replace(/[A-Z]/g, function (a) {
              return '-' + a;
            });
            return computedStyle.getPropertyValue(name);
          } else {
            return null;
          }
        }
        return elm.currentStyle[name];
      }
      function getSide(name) {
        var val = parseFloat(getStyle(name));
        return isNaN(val) ? 0 : val;
      }
      return {
        top: getSide(prefix + 'TopWidth'),
        right: getSide(prefix + 'RightWidth'),
        bottom: getSide(prefix + 'BottomWidth'),
        left: getSide(prefix + 'LeftWidth')
      };
    }
  };

  function noop$1() {
  }
  function ClassList(onchange) {
    this.cls = [];
    this.cls._map = {};
    this.onchange = onchange || noop$1;
    this.prefix = '';
  }
  global$2.extend(ClassList.prototype, {
    add: function (cls) {
      if (cls && !this.contains(cls)) {
        this.cls._map[cls] = true;
        this.cls.push(cls);
        this._change();
      }
      return this;
    },
    remove: function (cls) {
      if (this.contains(cls)) {
        var i = void 0;
        for (i = 0; i < this.cls.length; i++) {
          if (this.cls[i] === cls) {
            break;
          }
        }
        this.cls.splice(i, 1);
        delete this.cls._map[cls];
        this._change();
      }
      return this;
    },
    toggle: function (cls, state) {
      var curState = this.contains(cls);
      if (curState !== state) {
        if (curState) {
          this.remove(cls);
        } else {
          this.add(cls);
        }
        this._change();
      }
      return this;
    },
    contains: function (cls) {
      return !!this.cls._map[cls];
    },
    _change: function () {
      delete this.clsValue;
      this.onchange.call(this);
    }
  });
  ClassList.prototype.toString = function () {
    var value;
    if (this.clsValue) {
      return this.clsValue;
    }
    value = '';
    for (var i = 0; i < this.cls.length; i++) {
      if (i > 0) {
        value += ' ';
      }
      value += this.prefix + this.cls[i];
    }
    return value;
  };

  function unique(array) {
    var uniqueItems = [];
    var i = array.length, item;
    while (i--) {
      item = array[i];
      if (!item.__checked) {
        uniqueItems.push(item);
        item.__checked = 1;
      }
    }
    i = uniqueItems.length;
    while (i--) {
      delete uniqueItems[i].__checked;
    }
    return uniqueItems;
  }
  var expression = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i;
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  var whiteSpace = /^\s*|\s*$/g;
  var Collection;
  var Selector = global$10.extend({
    init: function (selector) {
      var match = this.match;
      function compileNameFilter(name) {
        if (name) {
          name = name.toLowerCase();
          return function (item) {
            return name === '*' || item.type === name;
          };
        }
      }
      function compileIdFilter(id) {
        if (id) {
          return function (item) {
            return item._name === id;
          };
        }
      }
      function compileClassesFilter(classes) {
        if (classes) {
          classes = classes.split('.');
          return function (item) {
            var i = classes.length;
            while (i--) {
              if (!item.classes.contains(classes[i])) {
                return false;
              }
            }
            return true;
          };
        }
      }
      function compileAttrFilter(name, cmp, check) {
        if (name) {
          return function (item) {
            var value = item[name] ? item[name]() : '';
            return !cmp ? !!check : cmp === '=' ? value === check : cmp === '*=' ? value.indexOf(check) >= 0 : cmp === '~=' ? (' ' + value + ' ').indexOf(' ' + check + ' ') >= 0 : cmp === '!=' ? value !== check : cmp === '^=' ? value.indexOf(check) === 0 : cmp === '$=' ? value.substr(value.length - check.length) === check : false;
          };
        }
      }
      function compilePsuedoFilter(name) {
        var notSelectors;
        if (name) {
          name = /(?:not\((.+)\))|(.+)/i.exec(name);
          if (!name[1]) {
            name = name[2];
            return function (item, index, length) {
              return name === 'first' ? index === 0 : name === 'last' ? index === length - 1 : name === 'even' ? index % 2 === 0 : name === 'odd' ? index % 2 === 1 : item[name] ? item[name]() : false;
            };
          }
          notSelectors = parseChunks(name[1], []);
          return function (item) {
            return !match(item, notSelectors);
          };
        }
      }
      function compile(selector, filters, direct) {
        var parts;
        function add(filter) {
          if (filter) {
            filters.push(filter);
          }
        }
        parts = expression.exec(selector.replace(whiteSpace, ''));
        add(compileNameFilter(parts[1]));
        add(compileIdFilter(parts[2]));
        add(compileClassesFilter(parts[3]));
  