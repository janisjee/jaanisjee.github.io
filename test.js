document.addEventListener("DOMContentLoaded", function (event) {
    var listSection = document.getElementsByClassName("section");
    console.log(listSection);
    for (var i = 0; i < listSection.length; i++) {
        (function (_section) {
            
            var _p = _section.getElementsByTagName('section')[0];
            var _button = _section.getElementsByTagName('a')[0];
            _button.addEventListener('click', function (e) {
                document.querySelectorAll('.section').forEach(function (a) {
                    a.getElementsByTagName('section')[0].classList.remove('open');
                    a.getElementsByTagName('a')[0].innerHTML = "Show More";
                });

                var target = e.target || e.srcElement;
                _p.classList.toggle('open');
                _button.innerHTML = "";
            });
        }(listSection[i]))        
    }    
});