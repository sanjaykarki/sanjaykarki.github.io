(function(){
  /* ── Contact links rendered via JS to prevent CF obfuscation ── */
  var links=[
    {icon:'@', label:'Email', val:'\u0068\u0065\u006c\u006c\u006f\u0040\u0073\u0061\u006e\u006a\u0061\u0079\u006b\u0061\u0072\u006b\u0069\u002e\u0063\u006f\u006d\u002e\u006e\u0070', href:"#"},
    {icon:'&#8734;', label:'Website', val:'sanjaykarki.com.np', href:'https://sanjaykarki.com.np'},
    {icon:'in', label:'LinkedIn', val:'linkedin.com/in/sanjay-karki', href:'https://www.linkedin.com/in/karkisanjay'},
    {icon:'&lt;/&gt;', label:'GitHub', val:'github.com/sanjaykarki', href:'https://github.com/sanjaykarki'}
  ];
  var cl=document.getElementById('clinks');
  if(cl){
    cl.innerHTML=links.map(function(l){
      return '<a href="'+l.href+'" class="clink"'+(l.href.indexOf('http')===0?' target="_blank" rel="noopener"':'')+'>'+
        '<div class="cion">'+l.icon+'</div>'+
        '<div><span class="clbl">'+l.label+'</span><span class="cval">'+l.val+'</span></div>'+
        '</a>';
    }).join('');
  }

  /* ── Terminal typewriter ── */
  var lines=[
    {t:'prompt',v:'&#8594; '},
    {t:'cmd',v:'whoami'},
    {t:'out',v:'sanjay_karki'},
    {t:'gap'},
    {t:'prompt',v:'&#8594; '},
    {t:'cmd',v:'cat profile.json'},
    {t:'out',v:'{'},
    {t:'kv',k:'"role"',v:'"Server Administrator"',c:true},
    {t:'kv',k:'"stack"',v:'"VMware &#183; Windows &#183; Linux &#183; Azure"',c:true},
    // {t:'kv',k:'"employer"',v:'"Heidelberg Materials DH"',c:true},
    {t:'kv',k:'"location"',v:'"Brno, Czechia"',c:true},
    {t:'kv',k:'"exp_years"',v:'11',isnum:true,c:true},
    {t:'kv',k:'"open_to_work"',v:'true',isnum:true},
    {t:'out',v:'}'},
    {t:'gap'},
    {t:'prompt',v:'&#8594; '},
    {t:'cmd',v:'uptime --pretty'},
    {t:'out',v:'<span style="color:#7ae8b4">up 11 years, 0 incidents unresolved</span>'}
  ];
  var tb=document.getElementById('termBody');
  if(!tb) return;
  var cursor='<span class="cur"></span>';
  var rendered='';
  function renderLines(idx){
    if(idx>=lines.length){tb.innerHTML=rendered+'\n<div><span class="tp">&#8594;</span> '+cursor+'</div>';return;}
    var l=lines[idx];
    if(l.t==='prompt'){rendered+='<div><span class="tp">'+l.v+'</span>';return renderLines(idx+1);}
    if(l.t==='cmd'){rendered+='<span class="tc">'+l.v+'</span></div>';tb.innerHTML=rendered+cursor;}
    else if(l.t==='out'){rendered+='<div style="margin-left:1rem;color:#c8c4bd">'+l.v+'</div>';}
    else if(l.t==='kv'){
      var val=l.isnum?'<span class="tv">'+l.v+'</span>':'<span class="ts">'+l.v+'</span>';
      rendered+='<div style="margin-left:2rem"><span class="tk">'+l.k+'</span>: '+val+(l.c?',':'')+'</div>';
    }
    else if(l.t==='gap'){rendered+='<div style="margin-top:.4rem"></div>';}
    tb.innerHTML=rendered;
    setTimeout(function(){renderLines(idx+1);},idx===0?0:30);
  }
  setTimeout(function(){renderLines(0);},600);

  /* ── Mobile menu ── */
  var hbg=document.getElementById('hbg');
  var mm=document.getElementById('mm');
  var mclose=document.getElementById('mclose');
  var mlinks=document.querySelectorAll('.mlink');
  function closeMenu(){mm.classList.remove('open');}
  if(hbg) hbg.addEventListener('click',function(){mm.classList.toggle('open');});
  if(mclose) mclose.addEventListener('click',closeMenu);
  mlinks.forEach(function(l){l.addEventListener('click',closeMenu);});

  /* ── Scroll: progress bar + back to top + active nav ── */
  var prog=document.getElementById('prog');
  var btt=document.getElementById('btt');
  window.addEventListener('scroll',function(){
    var pct=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    if(prog) prog.style.width=Math.min(100,pct)+'%';
    if(btt){btt.classList.toggle('show',window.scrollY>500);}
  },{passive:true});
  if(btt) btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});

  /* ── Intersection observer for fade-up ── */
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) e.target.classList.add('vis');
    });
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.fu,.fd').forEach(function(el){obs.observe(el);});
}());