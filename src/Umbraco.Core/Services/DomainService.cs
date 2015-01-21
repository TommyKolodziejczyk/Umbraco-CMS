using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Logging;
using Umbraco.Core.Models;
using Umbraco.Core.Persistence;
using Umbraco.Core.Persistence.Querying;
using Umbraco.Core.Persistence.UnitOfWork;

namespace Umbraco.Core.Services
{
    //TODO: Add events!

    public class DomainService : RepositoryService, IDomainService
    {
        public DomainService(IDatabaseUnitOfWorkProvider provider, RepositoryFactory repositoryFactory, ILogger logger)
            : base(provider, repositoryFactory, logger)
        {
        }

        public bool Exists(string domainName)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repo = RepositoryFactory.CreateDomainRepository(uow))
            {
                return repo.Exists(domainName);
            } 
        }

        public void Delete(IDomain domain)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repository = RepositoryFactory.CreateDomainRepository(uow))
            {
                repository.Delete(domain);
                uow.Commit();
            }
        }

        public IDomain GetByName(string name)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repository = RepositoryFactory.CreateDomainRepository(uow))
            {
                return repository.GetByQuery(new Query<IDomain>().Where(x => x.DomainName.InvariantEquals(name))).FirstOrDefault();
            }
        }

        public IDomain GetById(int id)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repo = RepositoryFactory.CreateDomainRepository(uow))
            {
                return repo.Get(id);
            }
        }

        public IEnumerable<IDomain> GetAll(bool includeWildcards)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repo = RepositoryFactory.CreateDomainRepository(uow))
            {
                return repo.GetAll(includeWildcards);
            }
        }

        public IEnumerable<IDomain> GetAssignedDomains(int contentId, bool includeWildcards)
        {
            var uow = UowProvider.GetUnitOfWork();
            using (var repo = RepositoryFactory.CreateDomainRepository(uow))
            {
                return repo.GetAssignedDomains(contentId, includeWildcards);
            }
        }

        public void Save(IDomain domainEntity, bool raiseEvents = true)
        {
            if (raiseEvents)
            {
                //if (Saving.IsRaisedEventCancelled(new SaveEventArgs<IContent>(content), this))
                //    return;
            }

            var uow = UowProvider.GetUnitOfWork();
            using (var repository = RepositoryFactory.CreateDomainRepository(uow))
            {
                repository.AddOrUpdate(domainEntity);
                uow.Commit();
            }

            //if (raiseEvents)
            //    Saved.RaiseEvent(new SaveEventArgs<IContent>(content, false), this);
        }
    }
}