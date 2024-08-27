/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2024 19:25:08
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
import './Admin.css';
import Loading from '../../components/Loading/Loading';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getDatas } from '../../api/api-entity';
import { entities } from '../../helpers/utils';
import AddEditForm from '../../components/AddEditForm/AddEditForm';
import GenericModal from '../../components/GenericModal/GenericModal';
import GenericForm from '../../components/GenericForm/GenericForm';
import { datas } from '../../db/datas';


interface AdminProps {

}


const Admin: FC<AdminProps> = () => {


  const { entityName } = useParams<{ entityName: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [entityData, setEntityData] = useState<any[]>([]);
  const [entityAllData, setEntityAllData] = useState<any[]>([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [model, setModel] = useState<string>('products');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentData, setCurrentData] = useState<any>(null);
  const [addData, setAddData] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [pagination, setPagination] = useState<any>(null);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let model = entityName ? entityName : 'products'
      setModel(model)

      const result = await getDatas(model, currentPage, itemsPerPage);

      setTableHeader(entities[model].map(d => d.name))

      setEntityAllData(result.datas);
      setEntityData(result.datas);
      setPagination(result.pagination)
      setIsLoading(false);


    };

    fetchData();
  }, [entityName, itemsPerPage]);

  useEffect(() => {
    const total = searchParams.get('total');
    let page: any = searchParams.get('page');


    if(page && (page > pagination?.totalPages)){
      handlePageChange(1)
      return;
    }
    

    if (total) setItemsPerPage(parseInt(total));
    if (page) setCurrentPage(parseInt(page));
    setIsLoading(false);
  }, [searchParams]);

  const filterEntities = () => {
    const filteredData = entityAllData.filter(entity => {
      if (entity.name) {
        return entity.name.toLowerCase().includes(searchTerm.toLowerCase());
      }

      return false;
    });
    setEntityData(filteredData.slice(0, itemsPerPage));
  };

  const handlePageChange = async (page: number) => {
    setSearchParams({ page: page.toString() });
    setCurrentPage(page);
    const result = await getDatas(model, page, itemsPerPage);
    setEntityData(result.datas);
    
  };

  const handleCloseModal = () => {
    setAddData(false)
    setUpdateData(false)
    setCurrentData(null)
  }
  const handleSave = () => {
    setAddData(false)
    setUpdateData(false)
    setCurrentData(null)
  }
  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>, item: any) => {
    setUpdateData(true)
    setCurrentData(item)
  }

  

  if (isLoading) return <Loading />;


  return (
    <div className="Admin">
      <HeaderPage name="Panneau d'administration" />
      <div className="container Admin_container">

        <GenericModal
          show={addData || updateData}
          title={addData ? "Ajouter " : "Modifier"}
          body={
            <GenericForm
              entityName={model}
              initialData={currentData}
              onSubmit={handleSave}
              onClose={handleCloseModal}
            />
          }
          onSave={handleSave}
          onClose={handleCloseModal}
        />
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className={`list-group-item ${model === 'products' ? 'active' : ''}`}>
                <Link to='/admin/products'>
                  Gestion des produits
                </Link>
              </li>
              <li className={`list-group-item ${model === 'categories' ? 'active' : ''}`}>
                <Link to='/admin/categories'>
                  Gestion des categories
                </Link>
              </li>
              <li className={`list-group-item ${model === 'services' ? 'active' : ''}`}>
                <Link to='/admin/services'>
                  Gestion des services
                </Link>
              </li>

            </ul>

          </div>
          <div className="col-md-9">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={`Rechercher ${model === 'products' ? 'un produit' : model === 'categories' ? 'une categorie' : model === 'services' ? 'un service' : ''} ...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="button" onClick={filterEntities}>
                Rechercher
              </button>
            </div>
            <div className="d-flex mb-2 jcsb">
              <button className="btn btn-primary" onClick={() => setAddData(true)}>
                <i className="fas fa-plus"></i> Ajouter
              </button>
              {
                pagination?.totalPages > 1 &&
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: pagination?.totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(page)}>
                        {page}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${currentPage === pagination?.totalPages ? 'disabled' : ''}`}
                  >
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              }
            </div>
            {entityData?.length ? (
              <>
                <div className="d-flex justify-content-between">
                  {/* Pagination and Column Selection code will go here */}
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>N#</th>
                        {tableHeader.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entityData.map((item, index) => (
                        <tr key={item._id}>
                          <td>{pagination.total - index - ((currentPage -1)*itemsPerPage)}</td>
                          {tableHeader.map((key) => (
                            <td key={key}>
                              <span>{item[key]}</span>
                            </td>
                          ))}
                          <td>
                            <div className="d-flex gap-1">
                              <button className="btn btn-success" onClick={() => setViewData(true)}>
                                <i className="fas fa-eye"></i> Voir
                              </button>
                              <button className="btn btn-warning"
                                onClick={(e: any) => handleUpdate(e, item)}>
                                <i className="fas fa-edit"></i> Modifier
                              </button>
                              <button className="btn btn-danger" onClick={() => setDeleteData(true)}>
                                <i className="fas fa-trash"></i> Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <p>Aucune donnée disponible !</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;