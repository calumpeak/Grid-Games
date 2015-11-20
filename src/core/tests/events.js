describe('core.Events', function () {
    var expect  = window.chai.expect;
    var sinon   = window.sinon;

    var events = core.Events();

    describe('bind', function () {
        it('should bind an element to an event and fire a callback when event triggered', function () {
            var callback = sinon.spy();
            var div = document.createElement('div');
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent('click');

            events.bind(div, 'click', callback);
            div.dispatchEvent(clickEvent);

            expect(callback.called).to.be.true;
        });
    });

    describe('unbind', function () {
        it('should unbind an event', function () {
            var callback = sinon.spy();
            var div = document.createElement('div');
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent('click');

            div.addEventListener('click', callback);
            div.dispatchEvent(clickEvent);

            expect(callback.called).to.be.true;

            events.unbind(div, 'click', callback);
            div.dispatchEvent(clickEvent);
            div.dispatchEvent(clickEvent);
            div.dispatchEvent(clickEvent);

            expect(callback.calledOnce).to.be.true;
        });
    });

    describe('watch', function () {
        beforeEach(function () {
            this.obj = {};
            events.watch(this.obj);
        });
        it('should apply the "on" method to an object', function () {
            expect(this.obj).to.have.property('on');
        });

        it('should apply the "fire" method to an object', function () {
            expect(this.obj).to.have.property('fire');
        });

        describe('SAXEvent', function () {
            it('should store data to "this.data"', function () {
                // Tested below
            });
        });

        describe('on', function () {
            it('should execute a callback when a custom event fires', function () {
                var callback = sinon.spy();
                this.obj.on('test', callback);
                this.obj.fire('test');
                expect(callback.called).to.be.true;
            });

            it('should allow a context in which to call callback', function () {
                var foo = {test: "testing"};
                var callback = sinon.spy();
                this.obj.on('test', callback, foo);
                this.obj.fire('test');
                expect(callback.thisValues[0]).to.deep.equal(foo);
            });

            it('should allow to pass parameters to the callback', function () {
                var callback = sinon.spy();
                this.obj.on('test', callback, null, ['foo', 10]);
                this.obj.fire('test');
                expect(callback.args[0][1]).to.equal('foo');
                expect(callback.args[0][2]).to.equal(10);
            });
        });

        describe('fire', function () {
            it('should pass an instance of SAXEvent as the first parameter of each callback', function () {
                var callback = sinon.spy();
                this.obj.on('test', callback);
                this.obj.fire('test');
                console.log(callback.args[0][0]);
                expect(callback.args[0][0]).to.be.an('object');
            });
        });
    });
});
