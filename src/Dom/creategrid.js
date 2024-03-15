export default function createGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach(grid => {
        const dim = 10
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                const cell = document.createElement('div');
                cell.setAttribute('data-x', `${i}`);
                cell.setAttribute('data-y', `${j}`);
                cell.classList.add('cell')
                cell.style.width = '2rem';
                cell.style.height = '2rem';
                cell.style.border = '1px solid black';
                grid.appendChild(cell);


                cell.addEventListener('click', () => {
                    console.log(`Cell clicked at [${i}, ${j}]`);
                })
            }
        }
    })
}