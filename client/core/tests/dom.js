describe('core.Dom', function () {
    var expect = window.chai.expect;
    var sinon  = window.sinon;

    var dom = core.Dom(window, document, core.Utils());

    beforeEach(function () {
        this.div        = document.createElement('div');
        this.div.id     = 1;
        this.div2       = document.createElement('div');
        this.div2.id    = 2;
        this.div3       = document.createElement('div');
        this.div3.id    = 3;
        this.div4       = document.createElement('div');
        this.div4.id    = 4;
        this.nodes      = [this.div, this.div2, this.div3];
    });

    describe('create', function () {
        it('should create a new node from a tag name', function () {
            var div = 'div';
            expect(div.tagName).to.be.undefined;
            expect(div.nodeType).to.be.undefined;
            div = dom.create(div);
            expect(div.tagName).to.equal('DIV');
            expect(div.nodeType).to.equal(1);
        });
    });

    describe('destroy', function () {
        it('should destroy a single node', function () {
            document.body.appendChild(this.div);
            expect(document.getElementById(1).nodeType).to.equal(1);

            dom.destroy(this.div);
            expect(document.getElementById(1)).to.be.null;
        });

        it('should destroy an array of nodes', function () {
            this.nodes.forEach(function (index) {
                document.body.appendChild(index);
            });

            expect(document.getElementById(1).nodeType).to.equal(1);
            expect(document.getElementById(2).nodeType).to.equal(1);
            expect(document.getElementById(3).nodeType).to.equal(1);

            dom.destroy(this.nodes);

            expect(document.getElementById(1)).to.be.null;
            expect(document.getElementById(2)).to.be.null;
            expect(document.getElementById(3)).to.be.null;
        });
    });

    describe('build', function () {
        it('should append child elements to the first argument passed', function () {
            var nestedDiv = dom.build(this.div, this.div2, this.div3);
            expect(nestedDiv.outerHTML).to.equal('<div id="1"><div id="2"></div><div id="3"></div></div>');
        });
    });

    describe('append', function () {
        it('should append an element to another element', function () {
            dom.append(this.div, this.div2);
            expect(this.div2.childNodes[0].id).to.equal('1');
        });

        it('should append an array of nodes to another element', function () {
            dom.append(this.nodes, this.div4);
            expect(this.div4.childNodes[0].id).to.equal('1');
            expect(this.div4.childNodes[1].id).to.equal('2');
            expect(this.div4.childNodes[2].id).to.equal('3');
        });

        it('should append an element to the document body if none provided', function () {
            dom.append(this.div);
            expect(document.getElementById(1).outerHTML).to.equal('<div id="1"></div>');
        });
    });

    describe('setStyle', function () {
        it('should set the style of an element to the defined property and attribute', function () {
            dom.setStyle(this.div, 'width', '100px');
            expect(this.div.outerHTML).to.equal('<div id="1" style="width: 100px; "></div>');
        });
    });

    describe('getStyle', function () {
        it('should return an elements computed styles', function () {
            this.div.style.position = 'absolute';
            this.div.style.zIndex   = 50000;
            document.body.appendChild(this.div);
            var styles = dom.getStyle(this.div);
            expect(styles.position).to.equal('absolute');
            expect(styles.zIndex).to.equal('50000');
        });
    });

    describe('getRect', function () {
        it('should return an elements position relative to the window', function () {
            this.div.style.width    = '100px';
            this.div.style.height   = '100px';
            this.div.style.position = 'absolute';
            this.div.style.top      = 0;
            this.div.style.left     = 0;
            document.body.appendChild(this.div);

            var rect = dom.getRect(this.div);

            expect(rect.left).to.equal(0);
            expect(rect.right).to.equal(100);
            expect(rect.top).to.equal(0);
            expect(rect.bottom).to.equal(100);
            expect(rect.width).to.equal(100);
            expect(rect.height).to.equal(100);
        });
    });
});
