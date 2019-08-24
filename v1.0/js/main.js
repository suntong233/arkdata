window.onload = function(){
    const main = st('.mian')   // 获取main  div 
    let frameDom = document.createDocumentFragment();  // 创建文档碎片节点
    let mainbox = stCEI('div','','mainbox');   //创建每一个div卡片
    let dom;     //创建一个dom  用来展示数据
    let groupSelect = st('#group');  //  获取分类列表
    let sortSelect = st('#sort');    //  获取排序方式列表
    let sortBtn = st('.sortBtn')     //  获取排序按钮
    let flag = true;                  //  排序用的flag
    let animalData = animalDataAll.map(data=>{
        return data
    })
    groupSelect.addEventListener('change',groupSelectFun);
    function groupSelectFun(){
        animalData = animalDataAll.filter(item=>{
            return item.anclass === groupSelect.value
        })
        if(groupSelect.value === 'default'){
            animalData = animalDataAll.map(data=>{
                return data
            })
        }
        renderData()
    }
    sortBtn.addEventListener('click',function(){
        if(sortSelect.value == 'default'){
            groupSelectFun()
        }else{
            sortFun(animalData,'tameData',sortSelect.value)
            renderData()
        }
    })
    function sortFun(arr,props1,props2){
        if(flag){
            for(let i = 0;i<arr.length;i++){
                for(let j = 0;j<arr.length-1-i;j++){
                    if(+arr[j][props1][props2] < +arr[j+1][props1][props2]){
                        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    }
                }
            }
            flag = !flag;
        }else{
            for(let i = 0;i<arr.length;i++){
                for(let j = 0;j<arr.length-1-i;j++){
                    if(+arr[j][props1][props2] > +arr[j+1][props1][props2]){
                        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    }
                }
            }
            flag = !flag;
        }
    }
    function showCard(index){
        let mtDiv = stCEI('div','','mtDiv');
        let xunqiState = stCEI('div','','xunqiState');
        let arrowbox = stCEI('div','<div class=arrowBody></div><div class=arrowHead></div>','arrowbox')
        let nowState = stCEI('div','','nowState');
        let idState = stCEI('div','','idState');
        let levelState = stCEI('div','','levelState');
        let strID = `id : ${animalData[index].id?animalData[index].id:''}` ;
        let strLe = `等级提升: ${animalData[index].nowData.level-animalData[index].tameData.level}` ;
        idState.innerHTML = strID;
        levelState.innerHTML = strLe;
        let xunqiStateDom = `
            <div class="xunqiStateDiv"><span class="xunqiStateProp">生命值</span><span class="xunqiStateJD"><span data-cz="20000" data-jd="${animalData[index].tameData.hp}" class="xunqiStateJDT"></span>${animalData[index].tameData.hp}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">体力</span><span class="xunqiStateJD"><span data-cz="5000" data-jd="${animalData[index].tameData.nl}" class="xunqiStateJDT"></span>${animalData[index].tameData.nl}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">氧气</span><span class="xunqiStateJD"><span data-cz="2000" data-jd="${animalData[index].tameData.yq}" class="xunqiStateJDT"></span>${animalData[index].tameData.yq}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">食量</span><span class="xunqiStateJD"><span data-cz="100000" data-jd="${animalData[index].tameData.food}" class="xunqiStateJDT"></span>${animalData[index].tameData.food}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">负重</span><span class="xunqiStateJD"><span data-cz="5000" data-jd="${animalData[index].tameData.fz}" class="xunqiStateJDT"></span>${animalData[index].tameData.fz}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">攻击</span><span class="xunqiStateJD"><span data-cz="1500" data-jd="${animalData[index].tameData.at}" class="xunqiStateJDT"></span>${animalData[index].tameData.at}%</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">速度</span><span class="xunqiStateJD"><span data-cz="500" data-jd="${animalData[index].tameData.speed}" class="xunqiStateJDT"></span>${animalData[index].tameData.speed}%</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">实测伤害</span><span class="xunqiStateJD"><span data-cz="3000" data-jd="${animalData[index].tameData.tat}" class="xunqiStateJDT"></span>${animalData[index].tameData.tat}</span></div>
        `;
        xunqiState.innerHTML = xunqiStateDom;
        let nowStateDom = `
        <div class="xunqiStateDiv"><span class="xunqiStateProp">生命值</span><span class="xunqiStateJD"><span data-cz="20000" data-jd="${animalData[index].nowData.hp}" class="xunqiStateJDT"></span>${animalData[index].nowData.hp}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">体力</span><span class="xunqiStateJD"><span data-cz="5000" data-jd="${animalData[index].nowData.nl}" class="xunqiStateJDT"></span>${animalData[index].nowData.nl}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">氧气</span><span class="xunqiStateJD"><span data-cz="2000" data-jd="${animalData[index].nowData.yq}" class="xunqiStateJDT"></span>${animalData[index].nowData.yq}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">食量</span><span class="xunqiStateJD"><span data-cz="100000" data-jd="${animalData[index].nowData.food}" class="xunqiStateJDT"></span>${animalData[index].nowData.food}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">负重</span><span class="xunqiStateJD"><span data-cz="5000" data-jd="${animalData[index].nowData.fz}" class="xunqiStateJDT"></span>${animalData[index].nowData.fz}</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">攻击</span><span class="xunqiStateJD"><span data-cz="1500" data-jd="${animalData[index].nowData.at}" class="xunqiStateJDT"></span>${animalData[index].nowData.at}%</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">速度</span><span class="xunqiStateJD"><span data-cz="500" data-jd="${animalData[index].nowData.speed}" class="xunqiStateJDT"></span>${animalData[index].nowData.speed}%</span></div>
            <div class="xunqiStateDiv"><span class="xunqiStateProp">实测伤害</span><span class="xunqiStateJD"><span data-cz="3000" data-jd="${animalData[index].tameData.tat}" class="xunqiStateJDT"></span>${animalData[index].nowData.tat}</span></div>
            <div class="nowStateby">更多信息</div>
        `;
        nowState.innerHTML = nowStateDom;
        mtDiv.appendChild(xunqiState);
        mtDiv.appendChild(arrowbox);
        mtDiv.appendChild(nowState);
        mtDiv.appendChild(idState);
        mtDiv.appendChild(levelState);
        mtDiv.addEventListener('click',function(){
            document.body.removeChild(mtDiv);
        })
        document.body.insertBefore(mtDiv,st('#root'))
        let jds = sts('.xunqiStateJDT');
        for(let item of jds){
            let jdWidth = parseInt((item.dataset.jd/item.dataset.cz)*100);
            if(jdWidth>100){
                jdWidth = 100;
            }
            let newwidth = 0;
            let timeImterval = setInterval(function(){
                newwidth++;
                if(newwidth == jdWidth){
                    clearInterval(timeImterval);
                }
                stCss(item,{
                    width:newwidth+'%'
                })
            },20);
            
        }
        let bianBtn = st('.nowStateby');
        bianBtn.addEventListener('click',function(e){
            e.stopPropagation();
            for(let item of mtDiv.children){
                if(item.className=='byDIV'){
                    item.remove();
                }
            }
            let innerMsg = `
                <h4>留痕/变异等状况</h4>
                <div>留痕度${animalData[index].liuhen}%</div>
                <div>生命值变异次数：${animalData[index].bianYi.hp}</div>
                <div>耐力变异次数：${animalData[index].bianYi.nl}</div>
                <div>氧气变异次数：${animalData[index].bianYi.yq}</div>
                <div>食量变异次数：${animalData[index].bianYi.food}</div>
                <div>负重变异次数：${animalData[index].bianYi.fz}</div>
                <div>攻击力变异次数：${animalData[index].bianYi.at}</div>
                <div>速度变异次数：${animalData[index].bianYi.speed}</div>
            `
            mtDiv.appendChild(stCEI('div',innerMsg,'byDIV'))
            st('.byDIV').addEventListener('click',function(e){
                e.stopPropagation();
                mtDiv.removeChild(st('.byDIV'))
            })
        })

    }
    renderData()
    function renderData(){
        main.innerHTML = '';
        animalData.map((item,key)=>{
            let newMainbox = mainbox.cloneNode(); 
            newMainbox.addEventListener('click',function(){showCard(key)});
            dom = `<span class="cardSort">${key+1}</span>
                <div class="cardTitle">物种：${item.anclass}</div>
                <div class="cardState">训起/破壳状态</div>
                <div style="color:gray;font-size:16px;position:absolute;bottom:0;width:16px;right:0">${item.id?item.id:''}</div>
                <ul>
                    <li class="cardStateList"><span class="cardStateListspan">等级:</span>${item.tameData.level}</li>
                    <li class="cardStateList"><span class="cardStateListspan">生命值:</span>${item.tameData.hp}</li>
                    <li class="cardStateList"><span class="cardStateListspan">体力:</span>${item.tameData.nl}</li>
                    <li class="cardStateList"><span class="cardStateListspan">氧气:</span>${item.tameData.yq}</li>
                    <li class="cardStateList"><span class="cardStateListspan">食物:</span>${item.tameData.food}</li>
                    <li class="cardStateList"><span class="cardStateListspan">负重:</span>${item.tameData.fz}</li>
                    <li class="cardStateList"><span class="cardStateListspan">攻击:</span>${item.tameData.at}%</li>
                    <li class="cardStateList"><span class="cardStateListspan">速度:</span>${item.tameData.speed}%</li>
                    <li class="cardStateList"><span class="cardStateListspan">实测伤害:</span>${item.tameData.tat}</li>
                </ul>
                <div class="cardBtn">详细信息</div>
            `;
            newMainbox.innerHTML = dom;
            frameDom.appendChild(newMainbox)
        })
        main.appendChild(frameDom);
    }
    

}