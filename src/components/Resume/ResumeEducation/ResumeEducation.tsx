import { TabGrid, TabItem } from '../../../constant/style'
import { P } from '../ResumeStyle'
import { H4ResumeEducation, Li, Ul } from './ResumeEducationStyle'

export const ResumeEducation = ({ active }: { active: boolean }): JSX.Element => {
   return (
      <TabGrid $active={active}>
         <TabItem>
            <H4ResumeEducation>2016-2017</H4ResumeEducation>
            <H4ResumeEducation>Курсы по программированию</H4ResumeEducation>
            <H4ResumeEducation>ИТМО, Программирование</H4ResumeEducation>
            <P>
               Прошёл базовый курс обучения программы профессиональной подготовки по профессии
               "Оператор электронно-вычислительных и вычислительных машин", изучил следующие
               предметы:
               <Ul>
                  <Li>Введение в ИТ;</Li>
                  <Li>Основы архитектуры ПК;</Li>
                  <Li>
                     Математические и логические основы представления цифровой и электронной
                     информации и её обработки;
                  </Li>
                  <Li>Принципы построения устройств управления ЭВМ;</Li>
                  <Li>Работа с электронными текстовыми документами, таблицами, презентациями;</Li>
                  <Li>Основы конструирования и диаграммирования;</Li>
                  <Li>Основы проектирования и реализации визуальных компьютерных моделей;</Li>
                  <Li>Основы разработки интерактивных приложений.</Li>
               </Ul>
            </P>
         </TabItem>
         <TabItem>
            <H4ResumeEducation>2019-2023</H4ResumeEducation>
            <H4ResumeEducation>Высшее образование </H4ResumeEducation>
            <H4ResumeEducation>ГУАП, 09.03.02</H4ResumeEducation>
            <P>
               Я учился в пятом институте, он является ведущим в университете в области компьютерных
               наук и их приложений. Там я изучил основы программирования на различных языках, базы
               данных, моделирование и дизайн, углубился в изучение физики и математики. Это мне
               позволило стать специалистом в области вычислительных машин, комплексов, систем и
               сетей, программного обеспечения вычислительной техники и автоматизированных систем,
               математического обеспечения и администрирования информационных систем,
               математического моделирования, информатики и вычислительной техники, электронных
               устройств и систем. Обучение в институте сочетает все аспекты подготовки в области IT
               – от микропроцессорных систем до виртуальной и дополненной реальности.
            </P>
         </TabItem>
      </TabGrid>
   )
}
