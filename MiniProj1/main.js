const app = Vue.createApp({
    data(){
        return{
            title: 'Edgar Ribeiro Swarowski',
            phone: '+351 927200076',
            email: 'edgarswarowski@gmail.com',
            resumo: 'Desenvolvedor com experiência na área da programação e auditoria financeira.\n Profissional com cidadania portuguesa interessado em adquirir novos conhecimentos e com vontade de lidar com \n novos desafios.',
            giturl: 'https://github.com/edgarswarowski',
            fburl: 'https://www.facebook.com/edgar.swarowski',
            infos: [
                {id:1, company: 'Cotesi', function: 'KEY-USER', descricao: 'SUPORTE A SOLUÇÕES E DESENVOLVIMENTO DE SOFTWARE', dataI: '05/2021', dataF: 'Atualmente', tecnologias:['JavaScript','Sharepoint', 'PowerBI Analyst']},
                {id:2, company: 'Dreamer Software', function: 'DESENVOLVEDOR JÚNIOR', descricao: 'DESENVOLVIMENTO DE SOFTWARES DE GESTÃO PARA O SETOR TÊXTIL', dataI: '08/2018', dataF: '04/2019', tecnologias:['VB.NET', 'SQL Server', 'Telerik']},
                {id:3, company: 'ActiveX', function: 'ESTÁGIO EM PROGRAMAÇÃO', descricao: 'DESENVOLVIMENTO DE APLICAÇÃO PARA GERENCIAMENTO DE TAREFAS EM C#', dataI: '03/2018', dataF: '04/2018', tecnologias:['C#', 'HTML5','CSS3']},
            ],
            educations: [
                {id:1, tipo:'Mestrado', area: 'Tecnologias e Sistemas Informáticos Web', local: 'Universidade Aberta', dataI: '2020', dataF: 'Presente'},
                {id:2, tipo:'Técnico', area: 'Programador de Informática', local: 'IEFP', dataI: '2017', dataF: '2018'},
                {id:3, tipo:'Licenciatura', area: 'Contabilidade', local: 'UFRGS-BR', dataI: '2011', dataF: '2015'},
            ],
            courses: [
                {id:1, Nome: 'The Complete ASP.NET MVC 5 Course', local: 'Udemy Academy', duracao: '7,5 Horas'},
                {id:2, Nome: 'Build Responsive Real World Websites with HTML5 and CSS3', local: 'Udemy Academy', duracao: '12 Horas'},
                {id:3, Nome: 'Java Programming', local: 'Udemy Academy', duracao: '26 Horas'},
                {id:4, Nome: 'C# .NET Developer Bootcamp', local: 'DIO', duracao: '90 Horas'},
            ],
            idiomas: [
                {id:1,nome: 'Portugês', nivel: 'Nativo'},
                {id:2,nome: 'Inglês', nivel: 'Avançado'},
                {id:3,nome: 'Espanhol', nivel: 'Básico'},
            ],
        }
    },
        methods: {
            updateImage(variantImage){
                this.image = variantImage
            }
        }
    }
)