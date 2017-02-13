riot.tag2('af-button', '<div onclick="{onClick}" class="af-button">{buttontext}</div>', 'af-button .af-button,[data-is="af-button"] .af-button{ background: rgba(158,158,158,.2); box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12); border: none; border-radius: 2px; color: #000; position: relative; height: 36px; margin: 0; min-width: 64px; padding: 0 16px; display: inline-block; font-family: "Roboto","Helvetica","Arial",sans-serif; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0; overflow: hidden; will-change: box-shadow; transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1); outline: none; cursor: pointer; text-decoration: none; text-align: center; line-height: 36px; vertical-align: middle; }', '', function(opts) {
    var self = this;
    self.buttontext = opts.buttontext;
    this.onClick = function() {
        self.opts.bus && self.opts.bus.trigger('click');
    };
    opts.bus && opts.bus.on('updatebuttontext', function(val) {
        self.buttontext = val;
        self.update();
    });
});