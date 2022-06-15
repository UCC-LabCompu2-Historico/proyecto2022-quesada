/**
 * Realiza los calculos para determinar los valores restantes de los 3 conjuntos
 * @method calculo3
 * @return false
 */
function calculo3 () {

  let U = document.getElementById('U').value;
  let A = document.getElementById('A').value;
  let B = document.getElementById('B').value;
  let C = document.getElementById('C').value;
  let SA = document.getElementById('SA').value;
  let SB = document.getElementById('SB').value;
  let SC = document.getElementById('SC').value;
  let AB = document.getElementById('AB').value;
  let BC = document.getElementById('BC').value;
  let AC = document.getElementById('AC').value;
  let ABC = document.getElementById('ABC').value;

  let Uj;
  let Aj;
  let Bj;
  let Cj;
  let SAj;
  let SBj;
  let SCj;
  let ABj;
  let BCj;
  let ACj;
  let ABCj;

  if (U!==""){
    Uj = parseInt(document.getElementById('U').value);
  }
  if (A!==""){
    Aj = parseInt(document.getElementById('A').value);
  }
  if (B!==""){
    Bj = parseInt(document.getElementById('B').value);
  }
  if (C!==""){
    Cj = parseInt(document.getElementById('C').value);
  }
  if (SA!==""){
    SAj = parseInt(document.getElementById('SA').value);
  }
  if (SB!==""){
    SBj = parseInt(document.getElementById('SB').value);
  }
  if (SC!==""){
    SCj = parseInt(document.getElementById('SC').value);
  }
  if (AB!==""){
    ABj = parseInt(document.getElementById('AB').value);
  }
  if (BC!==""){
    BCj = parseInt(document.getElementById('BC').value);
  }
  if (AC!==""){
    ACj = parseInt(document.getElementById('AC').value);
  }
  if (ABC!==""){
    ABCj = parseInt(document.getElementById('ABC').value);
  }

  let cont = 0;

  while (cont < 3){
    //para calcular U
    if (U === ""){
      if (SA !== "" && SB !== "" && SC !== "" && AC !== "" && BC !== "" && AB !== "" && ABC !== "") {
        Uj = SAj + SBj + SCj + ACj + BCj + ABj + ABCj;
      }
      if (A !== "" && B !== "" && C !== "" && AC !== "" && BC !== "" && AB !== "" && ABC !== "") {
        Uj = Aj + Bj + Cj - ACj - BCj - ABj - ABCj - ABCj;
      }
    }
    //para calcular A
    if (A === "") {
      if (SA !== "" && AC !== "" && ABC !== "" && AB !== "") {
        Aj = SAj + ACj + ABCj + ABj;
      } else if (U !== "" && SC !== "" && BC !== "" && SB !== "") {
        Aj = Uj - (SCj + BCj + SBj);
      }
    }
    //para calcular B
    if (B === "") {
      if (SB !== "" && BC !== "" && ABC !== "" && AB !== "") {
        Bj = SBj + BCj + ABCj + ABj;
      } else if (U !== "" && SA !== "" && AC !== "" && SC !== "") {
        Bj = Uj - (SAj + ACj + SCj);
      }
    }
    //para calcular C
    if (C === "") {
      if (SC !== "" && BC !== "" && ABC !== "" && AC !== "") {
        Cj = SCj + BCj + ABCj + ACj;
      } else if (U !== "" && SA !== "" && AB !== "" && SB !== "") {
        Cj = Uj - (SAj + ABj + SBj);
      }
    }
    //para calcular SA
    if (SA === "") {
      if (A !== "" && AB !== "" && AC !== "" && ABC !== "") {
        SAj = Aj - ABj - ACj - ABCj;
      } else if (U !== "" && B !== "" && C !== "" && BC !== "" && ABC !== "") {
        SAj = Uj + BCj + ABCj - Bj - Cj;
      }
    }
    //para calcular SB
    if (SB === "") {
      if (B !== "" && AB !== "" && BC !== "" && ABC !== "") {
        SBj = Bj - ABj - BCj - ABCj;
      } else if (U !== "" && A !== "" && C !== "" && AC !== "" && ABC !== "") {
        SBj = Uj + ACj + ABCj - Aj - Cj;
      }
    }
    //para calcular SC
    if (SC === "") {
      if (C !== "" && AC !== "" && BC !== "" && ABC !== "") {
        SCj = Cj - ACj - BCj - ABCj;
      } else if (U !== "" && A !== "" && B !== "" && AB !== "" && ABC !== "") {
        SCj = Uj + ABj + ABCj - Aj - Bj;
      }
    }
    //para calcular AC
    if (AC === "") {
      if (A !== "" && SA !== "" && AB !== "" && ABC !== "") {
        ACj = Aj - (SAj + ABj + ABCj);
      } else if (C !== "" && SC !== "" && BC !== "" && ABC !== "") {
        ACj = Cj - (SCj + BCj + ABCj);
      } else if (U !== "" && B !== "" && SA !== "" && SC !== "") {
        ACj = Uj - (Bj + SAj + SCj);
      } else if (U !== "" && SA !== "" && SC !== "" && SB !== "" && AB !== "" && BC !== "" && ABC !== "") {
        ACj = Uj - (SAj + SCj + SBj + ABj + BCj + ABCj);
      }
    }
    //para calcular BC
    if (BC === "") {
      if (B !== "" && SB !== "" && BC !== "" && ABC !== "") {
        BCj = Bj - (SBj + BCj + ABCj);
      } else if (C !== "" && SC !== "" && AC !== "" && ABC !== "") {
        BCj = Cj - (SCj + ACj + ABCj);
      } else if (U !== "" && A !== "" && SB !== "" && SC !== "") {
        BCj = Uj - (Aj + SBj + SCj);
      } else if (U !== "" && SA !== "" && SC !== "" && SB !== "" && AB !== "" && AC !== "" && ABC !== "") {
        BCj = Uj - (SAj + SCj + SBj + ABj + ACj + ABCj);
      }
    }
    //para calcular AB
    if (AB === "") {
      if (A !== "" && SA !== "" && AC !== "" && ABC !== "") {
        ABj = Aj - (SAj + ACj + ABCj);
      } else if (B !== "" && SB !== "" && BC !== "" && ABC !== "") {
        ABj = Bj - (SBj + BCj + ABCj);
      } else if (U !== "" && C !== "" && SA !== "" && SB !== "") {
        ABj = Uj - (Cj + SAj + SBj);
      } else if (U !== "" && SA !== "" && SC !== "" && SB !== "" && AC !== "" && BC !== "" && ABC !== "") {
        ABj = Uj - (SAj + SCj + SBj + ACj + BCj + ABCj);
      }
    }
    //para calcular ABC
    if (ABC === "") {
      if (U !== "" && SA !== "" && SB !== "" && SC !== "" && AC !== "" && BC !== "" && AB !== "") {
        ABCj = Uj - (SAj + SBj + SCj + ACj + BCj + ABj);
      }
    }
    cont++;
  }
  if (U !== ""){
    if (Uj === (SAj + SBj + SCj + ACj + BCj + ABj + ABCj)){
    } else if (Uj === (Aj + Bj + Cj - ACj - BCj - ABj - ABCj - ABCj)){
    } else {
      alert('Los valores ingresados no corresponden al valor de U establecido');
    }
  }
  if (Uj<0 || Aj<0 || Bj<0 || Cj<0 || SAj<0 || SBj<0 || SCj<0 || ABj<0 || BCj<0 || ACj<0 || ABCj<0){
    alert('Los valores ingresados no corresponden a este tipo de conjuntos');
  }
  document.conjuntos.U.value = Uj;
  document.conjuntos.A.value = Aj;
  document.conjuntos.B.value = Bj;
  document.conjuntos.C.value = Cj;
  document.conjuntos.SA.value = SAj;
  document.conjuntos.SB.value = SBj;
  document.conjuntos.SC.value = SCj;
  document.conjuntos.AB.value = ABj;
  document.conjuntos.BC.value = BCj;
  document.conjuntos.AC.value = ACj;
  document.conjuntos.ABC.value = ABCj;

  let Ux = document.getElementById('U').value;
  let Ax = document.getElementById('A').value;
  let Bx = document.getElementById('B').value;
  let Cx = document.getElementById('C').value;
  let SAx = document.getElementById('SA').value;
  let SBx = document.getElementById('SB').value;
  let SCx = document.getElementById('SC').value;
  let ABx = document.getElementById('AB').value;
  let BCx = document.getElementById('BC').value;
  let ACx = document.getElementById('AC').value;
  let ABCx = document.getElementById('ABC').value;

  if (Ux !== "" && Ax !== "" && Bx !== "" && Cx !== "" && SAx !== "" && SBx !== "" && SCx !== "" && ACx !== "" && BCx !== "" && ABx !== "" && ABCx !== ""){ }
  else{
    alert('No ha sido posible calcular todos los valores');
  }

  return false;
}
/**
 * Realiza los calculos para determinar los valores restantes de los 2 conjuntos
 * @method calculo2
 * @return false
 */
function calculo2() {

  let U = document.getElementById('U').value;
  let A = document.getElementById('A').value;
  let B = document.getElementById('B').value;
  let SA = document.getElementById('SA').value;
  let SB = document.getElementById('SB').value;
  let AB = document.getElementById('AB').value;

  let Uj;
  let Aj;
  let Bj;
  let SAj;
  let SBj;
  let ABj;

  if (U!==""){
    Uj = parseInt(document.getElementById('U').value);
  }
  if (A!==""){
    Aj = parseInt(document.getElementById('A').value);
  }
  if (B!==""){
    Bj = parseInt(document.getElementById('B').value);
  }
  if (SA!==""){
    SAj = parseInt(document.getElementById('SA').value);
  }
  if (SB!==""){
    SBj = parseInt(document.getElementById('SB').value);
  }
  if (AB!==""){
    ABj = parseInt(document.getElementById('AB').value);
  }

  let cont = 0;

  while (cont < 3){
    //para calcular U
    if (U === ""){
      if (SA !== "" && SB !== "" && AB !== "") {
        Uj = SAj + SBj + ABj;
      }
      if (A !== "" && B !== "" && AB !== "") {
        Uj = Aj + Bj - ABj;
      }
    }
    //para calcular A
    if (A === "") {
      if (SA !== "" && AB !== "") {
        Aj = SAj + ABj;
      } else if (U !== "" && SB !== "") {
        Aj = Uj - SBj;
      }
    }
    //para calcular B
    if (B === "") {
      if (SB !== "" && AB !== "") {
        Bj = SBj + ABj;
      } else if (U !== "" && SA !== "") {
        Bj = Uj - SAj;
      }
    }
    //para calcular SA
    if (SA === "") {
      if (A !== "" && AB !== "") {
        SAj = Aj - ABj;
      } else if (U !== "" && B !== "") {
        SAj = Uj - Bj;
      }
    }
    //para calcular SB
    if (SB === "") {
      if (B !== "" && AB !== "") {
        SBj = Bj - ABj;
      } else if (U !== "" && A !== "") {
        SBj = Uj - Aj;
      }
    }
    //para calcular AB
    if (AB === "") {
      if (A !== "" && SA !== "") {
        ABj = Aj - SAj;
      } else if (B !== "" && SB !== "") {
        ABj = Bj - SBj;
      } else if (U !== "" && SA !== "" && SB !== "") {
        ABj = Uj - (SAj + SBj);
      }
    }
    cont++;
  }
  if (U !== ""){
    if (Uj === (SAj + SBj + ABj)){
    } else if (Uj === (Aj + Bj - ABj)){
    } else {
      alert('Los valores ingresados no corresponden al valor de U establecido');
    }
  }
  if (Uj<0 || Aj<0 || Bj<0 || SAj<0 || SBj<0 || ABj<0){
    alert('Los valores ingresados no corresponden a este tipo de conjuntos');
  }
  document.conjuntos.U.value = Uj;
  document.conjuntos.A.value = Aj;
  document.conjuntos.B.value = Bj;
  document.conjuntos.SA.value = SAj;
  document.conjuntos.SB.value = SBj;
  document.conjuntos.AB.value = ABj;

  let Ux = document.getElementById('U').value;
  let Ax = document.getElementById('A').value;
  let Bx = document.getElementById('B').value;
  let SAx = document.getElementById('SA').value;
  let SBx = document.getElementById('SB').value;
  let ABx = document.getElementById('AB').value;

  if (Ux !== "" && Ax !== "" && Bx !== "" && SAx !== "" && SBx !== "" && ABx !== ""){ }
  else{
    alert('No ha sido posible calcular todos los valores');
  }

  return false;
}
/**
 * Limpia los inputs de los 3 conjuntos
 * @method limpiar3
 */
function limpiar3(){
  document.conjuntos.U.value = "";
  document.conjuntos.A.value = "";
  document.conjuntos.B.value = "";
  document.conjuntos.C.value = "";
  document.conjuntos.SA.value = "";
  document.conjuntos.SB.value = "";
  document.conjuntos.SC.value = "";
  document.conjuntos.AB.value = "";
  document.conjuntos.BC.value = "";
  document.conjuntos.AC.value = "";
  document.conjuntos.ABC.value = "";
}
/**
 * Limpia los inputs de los 2 conjuntos
 * @method limpiar2
 */
function limpiar2(){
  document.conjuntos.U.value = "";
  document.conjuntos.A.value = "";
  document.conjuntos.B.value = "";
  document.conjuntos.SA.value = "";
  document.conjuntos.SB.value = "";
  document.conjuntos.AB.value = "";
}