<template>
  <div id="app">
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-light" id="sidebar-wrapper">
        <div class="sidebar-heading">Components</div>
        <div class="list-group list-group-flush">
          <a href="index.php" class="list-group-item list-group-item-action bg-light">Dashboard</a>
          <a href="tables.php" class="list-group-item list-group-item-action bg-light">Tables</a>
          <a href="blank-page.php" class="list-group-item list-group-item-action bg-light">Starter Page</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
        </div>
        <div class="accordion" id="accordionSubMenu">
          <div class="card">
            <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" >
              <h2 class="mb-0">
                <a class="btn btn-link collapsed" aria-expanded="true" aria-controls="collapseOne">
                  Link1
                </a>
              </h2>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionSubMenu">
              <div class="card-body">
                Anim pariatur cliche
              </div>
            </div>
          </div>
        </div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light">Settings</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Log Out</a>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <i class="material-icons text-white" id="menu-toggle">menu</i>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <!-- page title-->
        <div class="row">
          <div class="col-sm-12 p-0">
            <div class="card page-title">
              <div class="row">
                <div class="col-md-6">Users</div>
                <div class="col-md-6 text-right">
                  <a href="#" title="Add New"><i class="material-icons text-success">add</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <!-- main content -->
          <div class="row pt-3">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1 bg-warning">
                <div class="row no-gutters">
                  <div class="col-md-4 col-sm-12 text-center align-self-center">
                    <i class="material-icons fs-5">group</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1 bg-danger text-white">
                <div class="row no-gutters">
                  <div class="col-md-4 text-center align-self-center">
                    <i class="material-icons fs-5">access_alarm</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-white">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1 bg-info text-white">
                <div class="row no-gutters">
                  <div class="col-md-4 text-center align-self-center">
                    <i class="material-icons fs-5">account_balance</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1 bg-success text-white">
                <div class="row no-gutters">
                  <div class="col-md-4 text-center align-self-center">
                    <i class="material-icons fs-5">android</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1 bg-primary text-white">
                <div class="row no-gutters">
                  <div class="col-md-4 text-center align-self-center">
                    <i class="material-icons fs-5">backup</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-white">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card card-dashboard mb-3 p-1">
                <div class="row no-gutters">
                  <div class="col-md-4 text-center align-self-center">
                    <i class="material-icons fs-5">dashboard</i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>

