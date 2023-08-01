const puzzleBoard = document.getElementById('puzzle');
const solveButton = document.getElementById('solve-button');
const  squares = 81;
const submission =[];

for (let i=0; i< squares; i++)
{
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type','number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);
    puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if(input.value){
            submission.push(input.value);
        } else {
            submission.push('.');
        }
    }) 
    console.log(submission);

}

 const solve =async () => {

    joinValues();
    const data  =submission.join('');
    console.log('data',data);
   

    const options = {
        method: 'POST',
        url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '11022d6b1dmsh78a92c849dfee1dp1617e0jsn9ab71ce8106c',
            'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
        },
        data: {
            input: data
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


solveButton.addEventListener('click', solve);

