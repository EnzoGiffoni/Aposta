import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import SideInfoPanel from '../../components/SideInfoPanel';

import { getTools, getOneTool } from '../../services/tools.service';

import ListItem from './components/ListItem';
import Form from './components/Form';

interface Tool {
  cod_ferramenta: string;
  descricao: string;
  imagem?: string;
  status?: number;
}

const Tools: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([] as Tool[]);

  const [searchedTool, setSearchedTool] = useState<Tool[]>([] as Tool[]);

  const [selectedTool, setSelectedTool] = useState<Tool>({} as Tool);

  async function getAllTool() {
    const { data } = await getTools();
    const toolsMapped = data.map((tool: Tool) => {
      return { ...tool, status: tool.status ? 1 : 0 };
    });
    setTools(toolsMapped);
  }

  useEffect(() => {
    getAllTool();
  }, []);

  const fetchSelectedTool = (codTool: string) => {
    return getOneTool(codTool).then(({ data }) => {
      setSelectedTool(data);
    });
  };

  function handleToolSelection(selected: Tool) {
    fetchSelectedTool(selected.cod_ferramenta);
  }

  function openForm() {
    setSelectedTool({} as Tool);
  }
  function onSearch(searchedValue: string) {
    if (searchedValue === undefined || searchedValue === '')
      setSearchedTool([] as Tool[]);
    setSearchedTool(
      tools.filter(tool =>
        tool.descricao
          .toLowerCase()
          .includes(searchedValue.toLocaleLowerCase()),
      ),
    );
  }

  return (
    <Container className="page-container">
      <SideInfoPanel
        title="Ferram..."
        onSearch={(searchedValue: string) => onSearch(searchedValue)}
        openForm={() => openForm()}
      >
        <ListItem
          list={searchedTool.length ? searchedTool : tools}
          onClicked={item => handleToolSelection(item)}
        />
      </SideInfoPanel>
      <Form
        title="Adicionar uma Ferramenta"
        toolSelected={selectedTool}
        onSave={() => getAllTool()}
      />
    </Container>
  );
};

export default Tools;
