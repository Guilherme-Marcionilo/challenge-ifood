document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a tabela
    function alternaTabela(tabelaId) {
        document.querySelectorAll('.table-container table').forEach(table => {
            table.classList.add('table-hidden');
        });

        const tabelaParaMostrar = document.getElementById(tabelaId);
        if (tabelaParaMostrar) {
            tabelaParaMostrar.classList.remove('table-hidden');
        }
    }

    document.querySelectorAll('.menu-ta a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelectorAll('.menu-ta a').forEach(link => link.classList.remove('men-table-2'));

            this.classList.add('men-table-2');

            const tabelaId = this.getAttribute('data-table');
            alternaTabela(tabelaId);
        });
    });

    alternaTabela('ativos');
    document.querySelector('.menu-ta a[data-table="ativos"]').classList.add('men-table-2');
});