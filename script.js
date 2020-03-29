  var numbers = [];
  var whichDisplay = 0;
  var elements;
  var playPause;
  var arrowEle;
  var viewprtwidth;
  
  function addDataInList(evt) {
      var node = document.getElementById('inData').value;
      if(node === "") {
        document.getElementById('inData').style.borderColor = "red";
      } else {
        document.getElementById('inData').style.borderColor = "black";
        numbers.push(Number(node));

        document.getElementById('inData').value = "";
        switch(whichDisplay) {
          case 0:
            showListView(evt);
          break;
          case 1:
            showTreeView(evt);
          break;
          case 2:
            showHashView(evt);
          break;
        }
      if(numbers.length >= 7) {
        document.getElementById('addBtnId').disabled = true;
      } else {
        document.getElementById('addBtnId').disabled = false;
      }
    }
  }

  function deleteDataInList(evt) {
    var node = document.getElementById('outData').value;
    if(node === "") {
      document.getElementById('outData').style.borderColor = "red";
    } else {
      document.getElementById('outData').style.borderColor = "black";
      const index = numbers.indexOf(Number(node));
      if (index > -1) {
        numbers.splice(index, 1);
      }
      console.log(numbers);
      document.getElementById('outData').value = "";
      switch(whichDisplay) {
        case 0:
          showListView(evt);
        break;
        case 1:
          showTreeView(evt);
        break;
        case 2:
          showHashView(evt);
        break;
      }
      if(numbers.length >= 7) {
        document.getElementById('addBtnId').disabled = true;
      } else {
        document.getElementById('addBtnId').disabled = false;
      }
    }
  }

  function showListView(evt) {
    var num = document.createElement('div');
    num.className = "view list";
    num.id = "view";
    var check = document.getElementById('Canvas').children.length;
    if(check > 0) {
      document.getElementById('Canvas').removeChild(document.getElementById('view'));
    }
    document.getElementById('Canvas').appendChild(num);

    var dev = document.createElement('div');
    dev.id = "info";
    var title = document.createElement('h3');
    title.appendChild(document.createTextNode('List'));
    var des = document.createElement('p');
    des.appendChild(document.createTextNode("In computer science, a list or sequence is an abstract data type that represents a countable number of ordered values, where the same value may occur more than once. An instance of a list is a computer representation of the mathematical concept of a tuple or finite sequence; the (potentially) infinite analog of a list is a stream. Lists are a basic example of containers, as they contain other values. If the same value occurs multiple times, each occurrence is considered a distinct item. "));
    var anc = document.createElement('a');
    anc.appendChild(document.createTextNode('Read More.....'));
    anc.href = "https://www.geeksforgeeks.org/data-structures/linked-list/";
    anc.target="_blank";
    des.appendChild(anc);
    dev.appendChild(title);
    dev.appendChild(des);
    check = document.getElementById('information').children.length;
    if(check > 0) {
      document.getElementById('information').removeChild(document.getElementById('info'));
    }
    document.getElementById('information').appendChild(dev);

     console.log(num);
     whichDisplay = 0;
     addNumbers(evt);
     animateList(evt);

  }

  function showTreeView(evt) {
  var num = document.createElement('div');
  num.className = "view tree";
  num.id = "view"
  var check = document.getElementById('Canvas').children.length;
  if(check > 0) {
    document.getElementById('Canvas').removeChild(document.getElementById('view'));
  }
  document.getElementById('Canvas').appendChild(num);

  var dev = document.createElement('div');
  dev.id = "info";
  var title = document.createElement('h3');
  title.appendChild(document.createTextNode('Tree'));
  var des = document.createElement('p');
  des.appendChild(document.createTextNode("In computer science, a tree is a widely used abstract data type (ADT) that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "+'children'+"), with the constraints that no reference is duplicated, and none points to the root."));
  var anc = document.createElement('a');
  anc.appendChild(document.createTextNode('Read More.....'));
  anc.href = "https://www.geeksforgeeks.org/binary-tree-data-structure/";
  anc.target="_blank";
  des.appendChild(anc);
  dev.appendChild(title);
  dev.appendChild(des);
  check = document.getElementById('information').children.length;
  if(check > 0) {
    document.getElementById('information').removeChild(document.getElementById('info'));
  }
  document.getElementById('information').appendChild(dev);

  console.log(num);
  whichDisplay = 1;
  addNumbers(evt);
  animateTree(evt);

  }

  function showHashView(evt) {
  var num = document.createElement('div');
  num.className = "view hash";
  num.id = "view"

  var check = document.getElementById('Canvas').children.length;
  if(check > 0) {
    document.getElementById('Canvas').removeChild(document.getElementById('view'));
  }
  document.getElementById('Canvas').appendChild(num);

  var dev = document.createElement('div');
  dev.id = "info";
  var title = document.createElement('h3');
  title.appendChild(document.createTextNode('Hash'));
  var des = document.createElement('p');
  des.appendChild(document.createTextNode("In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are always accommodated in some way. "));
  
  var anc = document.createElement('a');
  anc.appendChild(document.createTextNode('Read More.....'));
  anc.href = "https://www.geeksforgeeks.org/hashing-data-structure/";
  anc.target="_blank";
  des.appendChild(anc);
  dev.appendChild(title);
  dev.appendChild(des);
  
  check = document.getElementById('information').children.length;
  if(check > 0) {
    document.getElementById('information').removeChild(document.getElementById('info'));
  }
  document.getElementById('information').appendChild(dev);

  console.log(num);
  whichDisplay = 2;
  addNumbers(evt);
  elements = document.querySelector('.node');
  animateHash(evt);

  }

  function addNumbers(evt) {
    for(var i=0; i < numbers.length; i++) {
      
      width = $( window ).width();
      console.log(width);

      if(i > 0 && (whichDisplay == 0 || whichDisplay == 1)) {
        var arr = document.createElement('i');
        arr.className = "fa fa-long-arrow-right arrow";
        arr.id = "nuNode";
        //arr.style = "font-size:40px"
        document.getElementById('view').appendChild(arr);
        if(whichDisplay == 0) {
          arr.style.position = "relative";
        } else {
          arr.style.position = "absolute";          
        }
      }

      if(whichDisplay == 2) {
        var arr = document.createElement('p');
        arr.className = "hashLabel";
        arr.id = "nuNode";
        if(width > 1000) {
          arr.style = "font-size:25px";
        } else {
          arr.style = "font-size:15px";          
        }
        arr.appendChild(document.createTextNode(' Hash of ' + (i).toString()));
        document.getElementById('view').appendChild(arr);
        arr.style.position = "absolute";
      }

      var num = document.createElement('div');
      var str = numbers[i].toString();
      var data = document.createTextNode(str);

      num.className = "node";
      num.id = "nmNode"

      if(whichDisplay === 0) {
        num.style.position = "relative";
      } else {
        num.style.position = "absolute";
      }

      num.appendChild(data);
      document.getElementById('view').appendChild(num);
    }
  } 

  function clearAllData(evt) {
    console.log('Hii');

    while(numbers.length > 0) {
      numbers.pop();
    }

    document.getElementById('addBtnId').disabled = false;

    switch(whichDisplay) {
      case 0:
        showListView(evt);
      break;
      case 1:
        showTreeView(evt);
      break;
      case 2:
        showHashView(evt);
      break;
    }   
  }

  function animateTree(evt) { 
    console.log('in animataion');
    elements = document.querySelectorAll('.node');
    arrowEle = document.querySelectorAll('.arrow');

    width = $( window ).width();
    console.log(width);

    var xFacE = [];
    var yFacE = []

    var xFacA = [];
    var yFacA = [];

    var sh = 150;

    if(width > 1000) {
      yFacE = [0, 100, 280]
      xFacE = [300, 150, 450, 75, 225, 375, 525];

      yFacA = [60, 210];
      xFacA = [230, 430, 135, 210, 445, 530];
    } else {
        yFacE = [0, 50, 120]
        xFacE = [300, 150, 450, 75, 225, 375, 525].map(function(x) {
          return x * 0.4  - 150;
        });


      yFacA = [30, 100];
      xFacA = [230, 430, 135, 210, 445, 530].map(function(x) {
        return x * 0.4 - 150;
      });

    }

    var tempy;
    var tempx;
    anime({
      targets: elements,
      translateY: [
          {value: function(el, i, n) {
            if(i == 0) {
              tempy = yFacE[0];
            }else if(i < 3) {
              tempy = yFacE[1];
            } else {
              tempy = yFacE[2];
            }
            return tempy;
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, l) {
         if(i === 0) {
          tempx = xFacE[0]+sh;
         }else if(i === 1) {
          tempx = xFacE[1]+sh;
         } else if(i === 2){
          tempx = xFacE[2]+sh;
         } else if(i === 3) {
          tempx = xFacE[3]+sh;
         } else if(i === 4) {
          tempx = xFacE[4]+sh;
         } else if(i === 5) {
          tempx = xFacE[5]+sh;
         } else {
          tempx = xFacE[6]+sh;
         }
          return tempx;
        }, duration: 200},
      ],
      delay: function(el, i, l) {return i * 200},
      autoplay: true,
    });

    anime({
      targets: arrowEle,
      translateY: [
          {value: function(el, i, n) {
            if(i < 2) {
              tempy = yFacA[0];
            }else  {
              tempy = yFacA[1];
            } 
            return tempy;
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, l) {
         if(i === 0) {
          tempx = xFacA[0]+sh;
         }else if(i === 1) {
          tempx = xFacA[1]+sh;
         } else if(i === 2){
          tempx = xFacA[2]+sh;
         } else if(i === 3) {
          tempx = xFacA[3]+sh;
         } else if(i === 4) {
          tempx = xFacA[4]+sh;
         } else {
          tempx = xFacA[5]+sh;
         }
          return tempx;
        }, duration: 200,
      },

      ],
      rotate: function(el, i, n) {
        if(i === 0) {
          return 135;
        } else if( i === 1) {
          return 45;
        } else if (i === 2) {
          return 115;        
        } else if ( i === 3) {
          return 65;
        } else if ( i === 4) {
          return 115;
        } else {
          return 65;
        }
      },
      delay: function(el, i, l) {return i * 200},
      autoplay: true,
    });


  }

  function animateList(evt) {
    console.log('in animataion');
    width = $( window ).width();
    console.log(width);
    elements = document.querySelectorAll('.node');
    arrowEle = document.querySelectorAll('.arrow');
    
    var yFacE , yFacA;
    var xFacE , xFacA;

    if(width > 1000) {
      yFacE = 80;
      xFacE = 80;
      yFacA = 90;
      xFacA = 80;
    } else {
      yFacE = 0;
      xFacE = 20;
      yFacA = 0;
      xFacA = 20;      
    }

    anime({
      targets: elements,
      translateY: [
          {value: yFacE, duration: 1000},
      ],
      translateX: [
        {value: xFacE, duration: 200},
      ],
      delay: function(el, i, l) {return i * 200},
      autoplay: true,
    });

    anime({
      targets: arrowEle,
      translateY: [
          {value: yFacA, duration: 1000},
      ],
      translateX: [
        {value: xFacA, duration: 200},
      ],
      delay: function(el, i, l) {return i * 250},
      autoplay: true,
    });
  }

  function animateHash(evt) {
    var hashCheck = [];
    console.log('in animataion');


    width = $( window ).width();
    console.log(width);

    elements = document.querySelectorAll('.node');
    arrowEle = document.querySelectorAll('.hashLabel');
    var temp;
    var minY = 40;
    var minX = -50;

    var yFac = [];
    var xFacE = [];
    var xFacA = [];

    if(width > 1000) {
      yFac = [30, 160, 290];
      xFacE = [150, 500, 850];
      xFacA = [0, 350, 650];
    } else {

      yFac = [30, 160, 290].map(function(x) {
        return x * 0.4;
      });

      xFacE = [150, 500, 850].map(function(x) {
        return x * 0.4+10;
      });
      xFacA = [50, 400, 750].map(function(x) {
        return x * 0.4 ;
      });
    }
 
    anime({
      targets: elements,
      translateY: [
          {value: function(el, i, n) {
            temp = (numbers[i] % n);
            if(hashCheck.indexOf(temp) == -1) { 
              hashCheck.push(temp);
            } else {
              while(hashCheck.indexOf(temp) != -1) {
                temp++;
                if(temp >= numbers.length) {
                  temp = 0;
                }
              }
              hashCheck.push(temp);
            }
            if((temp % 3) === 0) {
              return yFac[0]-minY;
            } else if((temp % 3) === 1) {
              return yFac[1]-minY;
            } else {
              return yFac[2]-minY;
            }
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, n) {
          if(temp < 3) {
            return xFacE[0];
          } else if(temp < 6) {
            return xFacE[1];
          } else {
            return xFacE[2];
          }
        }, duration: 200},
      ],
      delay: function(el, i, l) {return i * 200},
      autoplay: true,
    });

    anime({
      targets: arrowEle,
      translateY: [
          {value: function(el, i, n) {
            if((i % 3) === 0) {
              return yFac[0];
            } else if((i % 3) === 1) {
              return yFac[1];
            } else {
              return yFac[2];
            }
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, n) {
          if(i < 3) {
            return xFacA[0];
          } else if(i < 6) {
            return xFacA[1];
          } else {
            return xFacA[2];
          }
        }, duration: 200},
      ],
      delay: function(el, i, l) {return i * 250},
      autoplay: true,
    });
  }

