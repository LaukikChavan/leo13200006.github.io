  var numbers = [];
  var whichDisplay = 0;
  var elements;
  var playPause;
  var arrowEle;

  function addDataInList(evt) {
      var node = document.getElementById('inData').value;
      if(node === "") {
        document.getElementById('inData').style.borderColor = "red";
      } else {
        document.getElementById('inData').style.borderColor = "black";
        numbers.push(Number(node));
        console.log(numbers);
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
        arr.style = "font-size:25px";
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

    var sh = 150;
    var tempy;
    var tempx;
    anime({
      targets: elements,
      translateY: [
          {value: function(el, i, n) {
            if(i == 0) {
              tempy = 0;
            }else if(i < 3) {
              tempy = 100;
            } else {
              tempy = 280;
            }
            return tempy;
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, l) {
         if(i === 0) {
          tempx = 300+sh;;
         }else if(i === 1) {
          tempx = 150+sh;;
         } else if(i === 2){
          tempx = 450+sh;;
         } else if(i === 3) {
          tempx = 75+sh;;
         } else if(i === 4) {
          tempx = 225+sh;;
         } else if(i === 5) {
          tempx = 375+sh;;
         } else {
          tempx = 525+sh;;
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
              tempy = 65;
            }else  {
              tempy = 220;
            } 
            return tempy;
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, l) {
         if(i === 0) {
          tempx = 230+sh;;
         }else if(i === 1) {
          tempx = 430+sh;;
         } else if(i === 2){
          tempx = 135+sh;;
         } else if(i === 3) {
          tempx = 210+sh;;
         } else if(i === 4) {
          tempx = 425+sh;;
         } else {
          tempx = 530+sh;;
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
    elements = document.querySelectorAll('.node');
    arrowEle = document.querySelectorAll('.arrow');
    
    anime({
      targets: elements,
      translateY: [
          {value: 80, duration: 1000},
      ],
      translateX: [
        {value: 10, duration: 200},
      ],
      delay: function(el, i, l) {return i * 200},
      autoplay: true,
    });

    anime({
      targets: arrowEle,
      translateY: [
          {value: 90, duration: 1000},
      ],
      translateX: [
        {value: 10, duration: 200},
      ],
      delay: function(el, i, l) {return i * 250},
      autoplay: true,
    });
  }

  function animateHash(evt) {
    var hashCheck = [];
    console.log('in animataion');
    elements = document.querySelectorAll('.node');
    arrowEle = document.querySelectorAll('.hashLabel');
    var temp;
    var minY = 40;
    var minX = -50;
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
              return 30-minY;
            } else if((temp % 3) === 1) {
              return 160-minY;
            } else {
              return 290-minY;
            }
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, n) {
          if(temp < 3) {
            return 150-minX;
          } else if(temp < 6) {
            return 500-minX;
          } else {
            return 850-minX;
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
              return 30;
            } else if((i % 3) === 1) {
              return 160;
            } else {
              return 290;
            }
          }, duration: 1000},
      ],
      translateX: [
        {value: function(el, i, n) {
          if(i < 3) {
            return 50;
          } else if(i < 6) {
            return 400;
          } else {
            return 750;
          }
        }, duration: 200},
      ],
      delay: function(el, i, l) {return i * 250},
      autoplay: true,
    });
  }

