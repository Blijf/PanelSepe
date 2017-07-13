<div class="row">
    <div class="col-sm-3" style="min-height: 0;">
        <div class="nav-side-menu">
            <div class="brand"><img src="./assets/img/logo.png"></div>
            <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            <div class="menu-list">
                <ul id="menu-content" class="menu-content collapse out">
                    <li>
                        <a href="equipo.php">
                            <i class="fa fa-dashboard fa-lg"></i> MI PANEL
                        </a>
                    </li>
                    <li>
                        <a href="equipo.php">
                            <i class="fa fa-users fa-lg"></i> VER EQUIPO
                        </a>
                    </li>
                    <li data-toggle="collapse" data-target="#control" class="collapsed">
                        <a href="#"><i class="fa fa-clock-o fa-lg"></i> CONTROL DE EMPLEADOS <span class="arrow"></span></a>
                    </li>
                    <ul class="sub-menu collapse" id="control">
                        <li data-toggle="collapse" data-target="#contratacion" class="collapsed">
                            <a href="#"><i class="fa fa-plus fa-lg"></i> Contratacion<span class="arrow"></span></a>
                        </li>
                        <ul class="sub-menu collapse sub-collapse" id="contratacion">
                            <a href="contratacion-encargados.php" class="menu-links">
                              <li>Encargados</li>
                            </a>
                            <a href="contratacion-empleados.php" class="menu-links">
                              <li>Empleados</li>
                            </a>
                        </ul>
                        <a href="despidos.php" class="menu-links">
                          <li><i class="fa fa-minus fa-lg" style="padding: 0 10px 0 14px;"></i>Despidos</li>
                        </a>
                        <a href="administrar-empleados.php" class="menu-links">
                          <li><i class="fa fa-users fa-lg" style="padding: 0 10px 0 12px;"></i>Administrar empleados</li>
                        </a>
                    </ul>
                    <li data-toggle="collapse" data-target="#config" class="collapsed">
                        <a href="#"><i class="fa fa-cog fa-lg"></i> CONFIGURACION <span class="arrow"></span></a>
                    </li>
                    <ul class="sub-menu collapse" id="config">
                        <a href="mini-manual.php" class="menu-links">
                          <li>Mini-Manual</li>
                        </a>
                        <a href="faq.html" class="menu-links">
                          <li>FAQ - Contacto</li>
                        </a>
                    </ul>
                    <li class="session-close">
                        <a href="#">
                            <i class="fa fa-power-off fa-lg"></i> SALIR
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>