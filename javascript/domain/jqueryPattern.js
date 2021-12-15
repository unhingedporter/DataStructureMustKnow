var $ = function(domElem){
    var self = this;
    var elementSelector = function(domSelector){
        self.elem = document.querySelectorAll(domSelector);
		return self;
    }

    self.addClass = function(className){

        if(!!className){
            for(var elem of self.elem)
            {
                elem.classList.add(className);
            }
        }

        return self;
    }

    self.removeClass = function(className){
   
        if(!!className){
            for(var elem of self.elem)
            {
                elem.classList.remove(className);
            }
        }
        return self;
    }

    elementSelector.call(self,domElem);

    return {
        addClass: self.addClass,
        removeClass: self.removeClass
    }
}


$('*').removeClass('red').addClass('red');