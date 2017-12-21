class Api::UsersController < ApplicationController

  PICS = [
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic19_d9sdwt.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic18_skpd06.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic17_fmxia5.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic16_ynk2vd.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic15_gor5uo.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic9_iumnqj.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic8_vzlgfc.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic7_xwj780.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_atszgv.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_ivry6z.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic14_kwe5vt.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic13_cexzpr.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic12_cymiu8.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic11_bswwjc.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic10_vcbhqh.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic5_fmwzal.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic4_nobsac.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic3_wyfdnd.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic2_a25vgi.jpg',
  'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic1_pn35e9.jpg'
]


  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if !user_params["image_url"]
      @user.image_url = PICS[rand(20)]
    end

    if @user.save
      sign_in(@user)
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 401
      )
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    else
      render(
      json: ["Error"],
      status: 404
      )
    end
  end

  def update
    @user = User.find(params[:user][:id])

    if @user.update(user_params)
      render :show
    else
      render(
      jsong: ["Invalid params"],
      status: 402
      )
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :l_name, :f_name, :email, :location, :age, :gender, :occupation)
  end



end
