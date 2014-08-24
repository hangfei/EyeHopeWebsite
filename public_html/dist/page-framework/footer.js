(function(){
	var array = $('.container');
	var handle = $($('.container')[array.length - 1]);

	handle.append('<hr class="featurette-divider">');
	handle.append('<footer>        <div class="row">          <div class="col-lg-12">            <ul class="list-inline">              <li class="pull-right"><a href="#top">Back to top</a></li>              <li><a href="http://news.bootswatch.com" onclick="pageTracker._link(this.href); return false;">Blog</a></li>              <li><a href="http://feeds.feedburner.com/bootswatch">RSS</a></li>              <li><a href="https://twitter.com/thomashpark">Twitter</a></li>              <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=F22JEM3Q78JC2">Donate</a></li>            </ul>            <p>Made by <a href="http://thomaspark.me" rel="nofollow">Hangfei Lin, Zach Zhang</a>. Contact them at <a href="mailto:thomas@bootswatch.com">hangfeilin@gmail.com, zack@mail.com</a>.</p>            <p>Based on <a href="http://getbootstrap.com" rel="nofollow">Bootstrap, Bootswatch</a>. Icons from <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="http://www.google.com/webfonts" rel="nofollow">Google</a>.</p>          </div>        </div>      </footer>');
}());
